
"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, RefreshCw, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Enquiry, getEnquiries, processEnquiry } from "@/services/enquiryService";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const statusOptions = ["Pending", "Approved", "Denied"];

export default function AdminEnquiryTable() {
  const [enquiryRequests, setEnquiryRequests] = React.useState<Enquiry[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isProcessing, setIsProcessing] = React.useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const [searchFilter, setSearchFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const fetchEnquiries = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getEnquiries();
      setEnquiryRequests(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not fetch enquiry requests.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  React.useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);
  
  const handleAction = async (enquiryId: string, action: 'approve' | 'deny') => {
    setIsProcessing(enquiryId);
    const result = await processEnquiry(enquiryId, action);
    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      });
      fetchEnquiries(); // Re-fetch data to update the table
      router.refresh(); // Re-fetches layout data like sidebar count
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
    setIsProcessing(null);
  }

  const filteredEnquiries = enquiryRequests.filter(req => {
      const searchMatch = searchFilter === "" ||
          req.subAdminName.toLowerCase().includes(searchFilter.toLowerCase()) ||
          req.requestedEmail.toLowerCase().includes(searchFilter.toLowerCase());
      const statusMatch = statusFilter === 'all' || req.status === statusFilter;
      return searchMatch && statusMatch;
  });

  const totalPages = Math.ceil(filteredEnquiries.length / rowsPerPage);
  const paginatedEnquiries = filteredEnquiries.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Update Requests</CardTitle>
        <CardDescription>Approve or deny requests from sub-admins to change their profile information.</CardDescription>
         <div className="flex flex-col md:flex-row gap-4 justify-between pt-4">
            <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                placeholder="Search by name or email..."
                className="pl-8"
                value={searchFilter}
                onChange={(e) => { setSearchFilter(e.target.value); setCurrentPage(1); }}
                />
            </div>
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
          </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Sub Admin</TableHead>
              <TableHead>Requested Change (Name)</TableHead>
              <TableHead>Requested Change (Email)</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
               <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Loading requests...
                </TableCell>
              </TableRow>
            ) : paginatedEnquiries.length > 0 ? (
              paginatedEnquiries.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div className="font-medium">{request.subAdminName}</div>
                  </TableCell>
                   <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">{request.requestedName}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">{request.currentEmail}</span>
                        <ArrowRight className="h-4 w-4 icon-pulse"/>
                        <span className="font-semibold">{request.requestedEmail}</span>
                    </div>
                  </TableCell>
                  <TableCell>{request.requestDate}</TableCell>
                  <TableCell>
                    <Badge variant={request.status === 'Pending' ? 'destructive' : 'secondary'}>{request.status}</Badge>
                  </TableCell>
                  <TableCell>
                     {request.status === 'Pending' && (
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => handleAction(request.id, 'approve')} disabled={isProcessing === request.id}>
                                {isProcessing === request.id ? <RefreshCw className="mr-2 h-4 w-4 animate-spin"/> : <Check className="mr-2 h-4 w-4 text-green-500 icon-pulse"/>} 
                                Approve
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleAction(request.id, 'deny')} disabled={isProcessing === request.id}>
                                {isProcessing === request.id ? <RefreshCw className="mr-2 h-4 w-4 animate-spin"/> : <X className="mr-2 h-4 w-4 text-red-500 icon-pulse"/>} 
                                Deny
                            </Button>
                        </div>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No pending enquiries.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
                Showing {paginatedEnquiries.length} of {filteredEnquiries.length} requests.
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
