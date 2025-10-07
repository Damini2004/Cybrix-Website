// src/app/(public)/layout.tsx
"use client";
import * as React from "react";
import Footer from "@/components/layout/footer";
import UserHeader from "@/components/layout/user-header";
import WhatsappFab from "@/components/layout/whatsapp-fab";
import { cn } from "@/lib/utils";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <UserHeader />
      <main className={cn("flex-1", isMounted && "pt-28")}>
        {children}
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
