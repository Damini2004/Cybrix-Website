// src/components/tables/all-submissions-table.tsx
"use client";

import * as React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getSubmissions, type Submission } from '@/services/submissionService';
import { getSubAdmins, type SubAdmin } from '@/services/subAdminService';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Eye, Search, FileText, User, Calendar, Type } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Skeleton } from '../ui/skeleton';

const statusColors: { [key: string]: string } = {
  Done: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-700",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-700",
  Canceled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-200 dark:border-red-700",
  "Verification Pending": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700",
  "Re-Verification Pending": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-700",
};

const statusOptions = ["Verification Pending", "Re-Verification Pending", "In Progress", "Done", "Canceled"];
const typeOptions = ["journal", "conference"];

export default function AllSubmissionsTable() {
  const { toast } = useToast();
  const [submissions, setSubmissions] = React.useState<Submission[]>([]);
  const [subAdmins, setSubAdmins] = React.useState<SubAdmin[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");

  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(9);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [submissionsData, subAdminsData] = await Promise.all([
          getSubmissions(),
          getSubAdmins(),
        ]);
        setSubmissions(submissionsData);
        setSubAdmins(subAdminsData);
      } catch (error) {
        toast({
          title: "Error fetching data",
          description: "Could not retrieve submissions and admins.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [toast]);
  
  const getAdminNameById = (adminId?: string) => {
    if (!adminId) return <span className="text-muted-foreground">Unassigned</span>;
    const admin = subAdmins.find(a => a.id === adminId);
    return admin ? admin.name : <span className="text-muted-foreground">Unknown Admin</span>;
  }

  const handleViewFile = (base64Data: string, fileName: string) => {
    if (!base64Data || !base64Data.startsWith('data:')) {
        toast({ title: "Error", description: "Invalid or missing file data.", variant: "destructive" });
        return;
    }
    
    const mimeType = base64Data.substring(base64Data.indexOf(':') + 1, base64Data.indexOf(';'));
    const fileExtension = mimeType.split('/')[1];

    const safeFileName = fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    if (mimeType === 'application/pdf') {
        const byteCharacters = atob(base64Data.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const file = new Blob([byteArray], { type: mimeType });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
    } else {
        const link = document.createElement('a');
        link.href = base64Data;
        link.download = `${safeFileName}.${fileExtension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  const filteredSubmissions = submissions.filter(s => {
      const searchMatch = searchFilter === "" ||
          s.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          s.fullName.toLowerCase().includes(searchFilter.toLowerCase());

      const statusMatch = statusFilter === 'all' || s.status === statusFilter;
      const typeMatch = typeFilter === 'all' || s.submissionType === typeFilter;

      return searchMatch && statusMatch && typeMatch;
  });

  const totalPages = Math.ceil(filteredSubmissions.length / rowsPerPage);
  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="px-0">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                placeholder="Search by title or author..."
                className="pl-8 h-10"
                value={searchFilter}
                onChange={(e) => { setSearchFilter(e.target.value); setCurrentPage(1); }}
                />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
                <Select value={statusFilter} onValueChange={(value) => { setStatusFilter(value); setCurrentPage(1); }}>
                    <SelectTrigger className="w-full sm:w-[180px] h-10">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        {statusOptions.map(status => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                 <Select value={typeFilter} onValueChange={(value) => { setTypeFilter(value); setCurrentPage(1); }}>
                    <SelectTrigger className="w-full sm:w-[150px] h-10">
                        <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        {typeOptions.map(type => (
                            <SelectItem key={type} value={type} className="capitalize">{type}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        {isLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton key={index} className="h-64 w-full" />
                ))}
             </div>
        ) : paginatedSubmissions.length === 0 ? (
             <div className="flex flex-col items-center justify-center text-center py-16 text-muted-foreground bg-secondary/30 rounded-lg">
                <FileText className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold">No Submissions Found</h3>
                <p>Try adjusting your filters or check back later.</p>
             </div>
        ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedSubmissions.map((submission) => (
                    <Card key={submission.id} className="group flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4" style={{borderLeftColor: statusColors[submission.status].match(/#[0-9a-f]{6}|(rgb|hsl)a?\([^)]+\)/i)?.[0] || 'hsl(var(--border))'}}>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-base line-clamp-2 pr-2">{submission.title}</CardTitle>
                                <Badge variant="outline" className={cn("whitespace-nowrap capitalize", statusColors[submission.status])}>
                                    {submission.status}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="h-4 w-4" />
                                <span>{submission.fullName}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Type className="h-4 w-4" />
                                <span className="capitalize">{submission.submissionType}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(submission.submittedAt).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="h-4 w-4" />
                                <span>{getAdminNameById(submission.assignedSubAdminId)}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                             <Button variant="outline" size="sm" className="w-full" onClick={() => handleViewFile(submission.manuscriptData, submission.title)}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Manuscript
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
             </div>
        )}
      </CardContent>
       <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-0">
            <div className="text-sm text-muted-foreground">
                Showing <strong>{paginatedSubmissions.length}</strong> of <strong>{filteredSubmissions.length}</strong> submissions.
            </div>
            <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Rows</p>
                    <Select
                        value={`${rowsPerPage}`}
                        onValueChange={(value) => {
                            setRowsPerPage(Number(value))
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="h-9 w-[70px]">
                            <SelectValue placeholder={`${rowsPerPage}`} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[9, 12, 24, 48].map((pageSize) => (
                                <SelectItem key={pageSize} value={`${pageSize}`}>
                                    {pageSize}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="text-sm font-medium">
                    Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </CardFooter>
    </Card>
  );
}
