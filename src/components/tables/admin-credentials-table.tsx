
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
import { getSubAdmins, SubAdmin } from "@/services/subAdminService";
import { getSuperAdmin, SuperAdmin } from "@/services/superAdminService";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "../ui/badge";

type Admin = (SuperAdmin | SubAdmin) & { role: 'Super Admin' | 'Sub-Admin' };

export default function AdminCredentialsTable() {
  const [admins, setAdmins] = React.useState<Admin[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { toast } = useToast();

  React.useEffect(() => {
    async function fetchAdmins() {
      setIsLoading(true);
      try {
        const [subAdminsResult, superAdminResult] = await Promise.all([
          getSubAdmins(),
          getSuperAdmin(),
        ]);
        
        let allAdmins: Admin[] = [];

        if (superAdminResult.success && superAdminResult.admin) {
            allAdmins.push({ ...superAdminResult.admin, role: 'Super Admin' });
        } else {
            toast({
                title: "Warning",
                description: "Could not fetch super admin credentials.",
                variant: "destructive"
            })
        }
        
        const subs = subAdminsResult.map(sa => ({ ...sa, role: 'Sub-Admin' as const}));
        allAdmins = [...allAdmins, ...subs];
        
        setAdmins(allAdmins);
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not fetch admin credentials.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    fetchAdmins();
  }, [toast]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Password</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {isLoading ? (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              Loading credentials...
            </TableCell>
          </TableRow>
        ) : admins.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              No administrators found.
            </TableCell>
          </TableRow>
        ) : (
          admins.map((admin) => (
            <TableRow key={admin.id}>
              <TableCell className="font-medium">{admin.email}</TableCell>
              <TableCell>{admin.password || '******'}</TableCell>
              <TableCell>
                  <Badge variant={admin.role === 'Super Admin' ? 'default' : 'secondary'}>{admin.role}</Badge>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

