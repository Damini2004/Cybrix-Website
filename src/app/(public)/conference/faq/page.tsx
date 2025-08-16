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
        // Content should now be an array of FAQs
        return result.content;
    }
    // Fallback content if there's an error
    return [{ question: "Error", answer: "Could not load FAQ content. Please try again later." }];
}

export default async function FaqPage() {
  const faqs = await getFaqContent();

  const isFaqArray = Array.isArray(faqs);

  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Find answers to common questions about our conferences.</p>
        </div>
        <Card className="max-w-3xl mx-auto shadow-lg">
            <CardContent className="p-6 md:p-8">
               {isFaqArray && faqs.length > 0 ? (
                 <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                           <div
                              className="prose prose-sm max-w-none text-muted-foreground"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                 </Accordion>
               ) : (
                  <p className="text-muted-foreground">No frequently asked questions have been added yet.</p>
               )}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
