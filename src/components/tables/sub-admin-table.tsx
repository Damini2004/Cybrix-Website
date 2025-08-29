
"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Search, CheckCircle, XCircle, Edit, Trash2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SubAdmin, updateSubAdminStatus } from "@/services/subAdminService";
import { useToast } from "@/hooks/use-toast";
import EditSubAdminForm from "../forms/edit-sub-admin-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const statusConfig = {
    approved: { label: "Approved", icon: CheckCircle, color: "text-green-500" },
    pending: { label: "Pending", icon: Clock, color: "text-yellow-500" },
    denied: { label: "Denied", icon: XCircle, color: "text-red-500" },
};

interface SubAdminTableProps {
  subAdmins: SubAdmin[];
  isLoading: boolean;
  onAdminChange: () => void;
  onAdminUpdated: (admin: SubAdmin) => void;
}

export default function SubAdminTable({ subAdmins, isLoading, onAdminChange, onAdminUpdated }: SubAdminTableProps) {
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();
  const [isUpdating, setIsUpdating] = useState<string | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<SubAdmin | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const handleStatusUpdate = async (id: string, status: 'approved' | 'denied') => {
    setIsUpdating(id);
    try {
      const result = await updateSubAdminStatus(id, status);
      if (result.success) {
        toast({
          title: "Status Updated",
          description: result.message,
        });
        onAdminChange();
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
       toast({
        title: "Error",
        description: "An unexpected error occurred while updating status.",
        variant: "destructive",
      });
    } finally {
      setIsUpdating(null);
    }
  };

  const filteredAdmins = subAdmins.filter(
    (admin) => {
      const searchMatch = (
        admin.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        admin.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
        admin.phone.toLowerCase().includes(searchFilter.toLowerCase()) ||
        admin.address.toLowerCase().includes(searchFilter.toLowerCase())
      );
      const statusMatch = statusFilter === 'all' || admin.status === statusFilter;
      return searchMatch && statusMatch;
    }
  );

  const totalPages = Math.ceil(filteredAdmins.length / rowsPerPage);
  const paginatedAdmins = filteredAdmins.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );


  const handleEditClick = (admin: SubAdmin) => {
    setSelectedAdmin(admin);
    setIsEditDialogOpen(true);
  };

  const handleEditSuccess = (updatedAdmin: SubAdmin) => {
    onAdminUpdated(updatedAdmin);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>All Sub Admins</CardTitle>
          <div className="flex flex-col md:flex-row gap-4 justify-between pt-2">
            <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                    placeholder="Filter by name, email, phone..." 
                    className="pl-8"
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                />
            </div>
             <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="denied">Denied</SelectItem>
                </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Password</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-24 text-center">Loading...</TableCell>
                </TableRow>
              ) : paginatedAdmins.length > 0 ? (
                paginatedAdmins.map((admin) => {
                  const statusInfo = statusConfig[admin.status as keyof typeof statusConfig];
                  return (
                    <TableRow key={admin.id}>
                      <TableCell className="font-medium">{admin.name}</TableCell>
                      <TableCell>{admin.email}</TableCell>
                      <TableCell>{admin.password}</TableCell>
                      <TableCell>{admin.phone}</TableCell>
                      <TableCell className="max-w-xs truncate">{admin.address}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex items-center w-fit gap-2">
                            {statusInfo && <statusInfo.icon className={`h-3 w-3 ${statusInfo.color}`} />}
                            {statusInfo ? statusInfo.label : admin.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{admin.joinDate}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost" disabled={isUpdating === admin.id}>
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            {admin.status === "pending" && (
                              <>
                                <DropdownMenuItem onSelect={(e) => { e.preventDefault(); handleStatusUpdate(admin.id, 'approved'); }}>
                                    <CheckCircle className="mr-2 h-4 w-4"/>
                                    Approve
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={(e) => { e.preventDefault(); handleStatusUpdate(admin.id, 'denied'); }} className="text-destructive">
                                    <XCircle className="mr-2 h-4 w-4"/>
                                    Deny
                                </DropdownMenuItem>
                              </>
                            )}
                            <DropdownMenuItem onSelect={() => handleEditClick(admin)}>
                                <Edit className="mr-2 h-4 w-4"/>
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4"/>
                                Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                  <TableRow>
                      <TableCell colSpan={8} className="h-24 text-center">
                          No sub-admins found.
                      </TableCell>
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
                Showing {Math.min(rowsPerPage, paginatedAdmins.length)} of {filteredAdmins.length} admins.
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
                            <SelectValue placeholder={rowsPerPage} />
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
      
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Edit Sub Admin</DialogTitle>
            <DialogDescription>
              Make changes to the sub-admin's profile below.
            </DialogDescription>
          </DialogHeader>
          {selectedAdmin && (
             <div className="flex-grow overflow-y-auto pr-4 -mr-2">
              <EditSubAdminForm
                admin={selectedAdmin}
                onAdminUpdated={handleEditSuccess}
                onClose={() => setIsEditDialogOpen(false)}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
