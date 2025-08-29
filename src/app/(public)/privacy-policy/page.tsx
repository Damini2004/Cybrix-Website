// src/app/(public)/privacy-policy/page.tsx
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { getPageContent } from "@/services/cmsService";

export default function PrivacyPolicyPage() {
  const [content, setContent] = React.useState("<p>Loading content...</p>");
  const [lastUpdated, setLastUpdated] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function fetchContent() {
      const result = await getPageContent("privacy-policy");
      setContent(result.success ? result.content : "<p>Error loading content. Please try again later.</p>");
    }
    fetchContent();
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);
  
  return (
    <div className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {lastUpdated ? `Last Updated: ${lastUpdated}` : 'Loading...'}
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Our Commitment to Your Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-lg max-w-none prose-h3:font-semibold prose-h3:text-lg prose-p:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: content || "" }} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
