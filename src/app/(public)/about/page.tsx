// src/app/(public)/about/page.tsx
import { getPageContent } from "@/services/cmsService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Target, Eye } from "lucide-react";

async function getAboutContent() {
    const result = await getPageContent("about");
    if (result.success) {
        return result.content;
    }
    return "<p>Error loading content. Please try again later.</p>";
}

export default async function AboutPage() {
  const content = await getAboutContent();
  
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Pure Research Insights</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our mission to advance knowledge and foster innovation by connecting the brightest minds from around the globe.
          </p>
        </div>
        <Card className="shadow-xl overflow-hidden border-primary/10">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 order-2 md:order-1">
               <div 
                  className="prose prose-lg max-w-none prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto text-card-foreground"
                  dangerouslySetInnerHTML={{ __html: content || "" }} 
                />
            </div>
            <div className="relative order-1 md:order-2 h-64 md:h-full min-h-[300px]">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&auto=format&fit=crop"
                alt="About Us Image"
                data-ai-hint="team collaboration"
                fill
                className="object-cover"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </Card>

        <div className="mt-16 md:mt-24">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To provide a premier platform for researchers, academics, and industry professionals to present and discuss the most recent innovations, trends, and concerns in various fields of study, fostering a collaborative environment for the advancement of knowledge.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mb-3">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To be a leading global facilitator of scientific and technological innovation, recognized for our commitment to quality, integrity, and the dissemination of high-impact research that addresses the challenges of today and shapes the world of tomorrow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
