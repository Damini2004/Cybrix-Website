// src/app/(public)/layout.tsx
"use client";
import * as React from "react";
import Footer from "@/components/layout/footer";
import UserHeader from "@/components/layout/user-header";
import WhatsappFab from "@/components/layout/whatsapp-fab";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <UserHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
