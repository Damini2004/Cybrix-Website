
// src/app/(public)/about/page.tsx
import { getPageContent } from "@/services/cmsService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Target, Eye, Presentation, BookOpen, GraduationCap } from "lucide-react";
import type { Metadata } from "next";
import BannerCarousel from "@/components/ui/banner-carousel";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Cybrix's mission to advance knowledge and foster innovation by connecting the brightest minds from around the globe through conference management, publications, and PhD services.",
  keywords: ["about us", "mission", "vision", "academic services", "conference management"],
};

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
  const bannerImages = [
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&h=800&auto=format&fit=crop", alt: "A diverse team collaborating on a project in a modern office", hint: "team collaboration" },
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&auto=format&fit=crop", alt: "A group of professionals working together around a laptop", hint: "team working" }
  ];
  
  return (
    <>
      <BannerCarousel images={bannerImages}>
        <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
            <CardContent className="p-8 md:p-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                    About Cybrix
                </h1>
                <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                    Discover our mission to advance knowledge and foster innovation by connecting the brightest minds from around the globe.
                </p>
            </CardContent>
        </Card>
      </BannerCarousel>


      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <Card className="shadow-xl overflow-hidden border-primary/10 bg-secondary/30">
            <div className="grid md:grid-cols-2 items-center">
                <div className="relative h-64 md:h-full min-h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&h=600&auto=format&fit=crop"
                    alt="A group of professionals working together around a laptop"
                    data-ai-hint="team collaboration"
                    fill
                    className="object-cover"
                />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-8 md:p-12">
                    <div 
                    className="prose prose-lg max-w-none prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto text-foreground"
                    dangerouslySetInnerHTML={{ __html: content || "" }} 
                    />
                </div>
            </div>
            </Card>
        </div>
      </section>

      <section className="bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="relative grid md:grid-cols-2 gap-x-12 max-w-5xl mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                    <Separator orientation="vertical" className="h-2/3" />
                </div>
                <Card className="relative text-center p-8 bg-background border-none shadow-none">
                     <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                      <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-muted-foreground">
                        To provide a premier platform for researchers, academics, and industry professionals to present and discuss the most recent innovations, trends, and concerns in various fields of study, fostering a collaborative environment for the advancement of knowledge.
                    </p>
                </Card>
                <Card className="relative text-center p-8 bg-background border-none shadow-none">
                    <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                      <Eye className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
                    <p className="text-muted-foreground">
                        To be a leading global facilitator of scientific and technological innovation, recognized for our commitment to quality, integrity, and the dissemination of high-impact research that addresses the challenges of today and shapes the world of tomorrow.
                    </p>
                </Card>
            </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter">Our Services</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                    We offer a comprehensive range of services to support your research and publication goals.
                </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {services.map((service, index) => (
                    <Card key={service.title} className="text-center group p-6 bg-secondary/20 border-border/30 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-secondary/40 hover:shadow-primary/20">
                        <CardHeader className="items-center p-0 mb-4">
                            <div className="p-4 bg-background rounded-full w-fit mb-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                                <service.icon className="h-8 w-8 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent className="p-0">
                           <CardTitle className="mb-2 text-xl font-semibold">{service.title}</CardTitle>
                            <p className="text-muted-foreground text-sm">{service.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
    </>
  );
}
