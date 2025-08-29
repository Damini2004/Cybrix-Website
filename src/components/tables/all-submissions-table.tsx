// src/components/tables/all-submissions-table.tsx
"use client";

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getSubmissions, type Submission } from '@/services/submissionService';
import { getSubAdmins, type SubAdmin } from '@/services/subAdminService';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Eye, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const statusColors: { [key: string]: string } = {
  Done: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "In Progress": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Canceled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Verification Pending": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Re-Verification Pending": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
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
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
    <Card>
      <CardHeader>
        <CardTitle>All Manuscript Submissions</CardTitle>
        <CardDescription>A complete list of all submissions in the system.</CardDescription>
        <div className="flex flex-col md:flex-row gap-4 justify-between pt-4">
            <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                placeholder="Search by title or author..."
                className="pl-8"
                value={searchFilter}
                onChange={(e) => { setSearchFilter(e.target.value); setCurrentPage(1); }}
                />
            </div>
            <div className="flex gap-4">
                <Select value={statusFilter} onValueChange={(value) => { setStatusFilter(value); setCurrentPage(1); }}>
                    <SelectTrigger className="w-full md:w-[180px]">
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
                    <SelectTrigger className="w-full md:w-[150px]">
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
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">Loading submissions...</TableCell>
              </TableRow>
            ) : paginatedSubmissions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">No submissions found.</TableCell>
              </TableRow>
            ) : (
              paginatedSubmissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell className="font-medium max-w-xs truncate">{submission.title}</TableCell>
                  <TableCell>{submission.fullName}</TableCell>
                  <TableCell>{getAdminNameById(submission.assignedSubAdminId)}</TableCell>
                  <TableCell>
                    <Badge className={cn("whitespace-nowrap capitalize", statusColors[submission.status])}>
                      {submission.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(submission.submittedAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleViewFile(submission.manuscriptData, submission.title)}>
                      <Eye className="h-4 w-4 mr-2" />
                      View File
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
                Showing {paginatedSubmissions.length} of {filteredSubmissions.length} submissions.
            </div>
            <div className="flex items-center gap-4">
                 <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <Select
                        value={`${rowsPerPage}`}
                        onValueChange={(value) => {
                            setRowsPerPage(Number(value))
                            setCurrentPage(1)
                        }}
                    >
                        <SelectTrigger className="h-8 w-[70px]">
                            <SelectValue placeholder={`${rowsPerPage}`} />
                        </SelectTrigger>
                        <SelectContent side="top">
                            {[10, 20, 30, 40, 50].map((pageSize) => (
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
