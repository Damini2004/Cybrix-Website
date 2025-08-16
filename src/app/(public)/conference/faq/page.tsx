// src/app/(public)/conference/faq/page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getPageContent } from "@/services/cmsService";
import { Card, CardContent } from "@/components/ui/card";

async function getFaqContent() {
    const result = await getPageContent("conference-faq");
    if (result.success) {
        return result.content;
    }
    // Fallback content if there's an error
    return "<h2>Error</h2><p>Could not load FAQ content. Please try again later.</p>";
}


export default async function FaqPage() {
  const content = await getFaqContent();

  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our conferences.</p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-lg">
            <CardContent className="p-6 md:p-8">
                <div 
                    className="prose prose-lg max-w-none prose-headings:text-primary prose-headings:border-b prose-headings:pb-2 prose-strong:text-foreground prose-p:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: content || "" }} 
                />
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
