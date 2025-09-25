
// src/app/(public)/conference/faq/page.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getPageContent } from "@/services/cmsService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <section className="relative h-[500px] w-full flex items-center justify-center p-4">
            <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&h=400&auto=format&fit=crop"
                alt="Support"
                data-ai-hint="questions support"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Find answers to common questions about our conferences, submissions, and publications.
                    </p>
                </CardContent>
            </Card>
        </section>

        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                         <Image
                            src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&h=600&auto=format&fit=crop"
                            alt="Contact support"
                            data-ai-hint="customer support"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                         <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Need More Help?</div>
                        <h2 className="text-3xl font-bold tracking-tighter">Can't Find Your Answer?</h2>
                        <p className="text-muted-foreground text-justify">
                            We've compiled a list of the most common questions we receive. If you can't find what you're looking for in the list below, please don't hesitate to reach out to our support team. We're here to assist you with any questions you may have about our services, submission process, or upcoming events.
                        </p>
                         <Button asChild>
                            <Link href="/contact-us">
                                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg border-primary/10">
              <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Common Questions</CardTitle>
              </CardHeader>
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
                    <p className="text-muted-foreground text-center">No frequently asked questions have been added yet.</p>
                )}
              </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
