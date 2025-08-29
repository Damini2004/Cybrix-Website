
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getPaymentUrl } from "@/services/settingsService";
import PaymentSettingsForm from "@/components/forms/payment-settings-form";
import SuperAdminSettingsForm from "@/components/forms/super-admin-settings-form";
import { getSuperAdmin } from "@/services/superAdminService";

export default async function SettingsPage() {
    const { url: currentPaymentUrl } = await getPaymentUrl();
    const { admin: superAdmin, message } = await getSuperAdmin();

    if (!superAdmin) {
        return (
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Error</h1>
                <p className="text-muted-foreground">{message}</p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Application Settings</h1>
                <p className="text-muted-foreground">Manage global settings for the application.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Settings</CardTitle>
                        <CardDescription>
                            Set the payment URL that will be sent to authors in the approval email.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <PaymentSettingsForm currentUrl={currentPaymentUrl} />
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Super Admin Credentials</CardTitle>
                        <CardDescription>
                            Update the primary email and password for the super admin account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SuperAdminSettingsForm currentAdmin={superAdmin} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
