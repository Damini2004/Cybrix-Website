// src/app/(public)/about/page.tsx
import { getPageContent } from "@/services/cmsService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Target, Eye, Presentation, BookOpen, GraduationCap } from "lucide-react";

async function getAboutContent() {
    const result = await getPageContent("about");
    if (result.success) {
        return result.content;
    }
    return "<p>Error loading content. Please try again later.</p>";
}

const services = [
    {
        icon: Presentation,
        title: "Conference Management",
        description: "End-to-end support for organizing successful academic conferences and events."
    },
    {
        icon: BookOpen,
        title: "Publications Consultancy",
        description: "Expert assistance with manuscript preparation and publishing in high-impact journals."
    },
    {
        icon: GraduationCap,
        title: "PhD Services",
        description: "Comprehensive support and guidance throughout your entire PhD journey."
    },
]

export default async function AboutPage() {
  const content = await getAboutContent();
  
  return (
    <div className="w-full bg-secondary/30">
      <section className="py-12 md:py-24 lg:py-32 text-center">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Pure Research Insights</h1>
          <p className="mt-4 max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our mission to advance knowledge and foster innovation by connecting the brightest minds from around the globe.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-24 lg:pb-32">
        <div className="container px-4 md:px-6">
            <Card className="shadow-xl overflow-hidden border-primary/10">
              <div className="grid md:grid-cols-2 items-center">
                <div className="relative h-64 md:h-full min-h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="About Us Image"
                    data-ai-hint="team collaboration"
                    fill
                    className="object-cover"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                 <div className="p-8 md:p-12">
                   <div 
                      className="prose prose-lg max-w-none prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto text-card-foreground"
                      dangerouslySetInnerHTML={{ __html: content || "" }} 
                    />
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

            <div className="mt-16 md:mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter">Our Services</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        We offer a comprehensive range of services to support your research and publication goals.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service) => (
                         <Card key={service.title} className="text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <CardHeader className="items-center">
                                <div className="p-4 bg-primary/10 rounded-full w-fit mb-3">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
