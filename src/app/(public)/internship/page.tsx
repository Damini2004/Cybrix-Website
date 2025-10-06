// src/app/(public)/internship/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { getInternships, Internship } from "@/services/internshipService";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "@/components/forms/contact-form";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, ArrowRight, BookUser } from "lucide-react";
import BannerCarousel from "@/components/ui/banner-carousel";

export default function InternshipPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

   const bannerImages = [
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&h=400&auto=format=fit=crop", alt: "Students collaborating", hint: "team collaboration" },
  ];

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const data = await getInternships();
        setInternships(data);
      } catch (error) {
        console.error("Failed to fetch internships", error);
        toast({
            title: "Error",
            description: "Could not load internship opportunities. Please try again later.",
            variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchInternships();
  }, [toast]); 

  const handleDownloadBrochure = (brochureUrl: string, internshipName: string) => {
    if (!brochureUrl) return;

    const link = document.createElement('a');
    link.href = brochureUrl;

    const mimeType = brochureUrl.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    let fileExtension = 'file';
    if (mimeType && mimeType.length > 1) {
        if (mimeType[1] === 'application/pdf') fileExtension = 'pdf';
        else if (mimeType[1] === 'application/msword') fileExtension = 'doc';
        else if (mimeType[1] === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') fileExtension = 'docx';
    }

    link.download = `Brochure-${internshipName.replace(/\s/g, '_')}.${fileExtension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="bg-secondary/30">
        <BannerCarousel images={bannerImages}>
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <BookUser className="mx-auto h-12 w-12 text-primary mb-4" />
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Internship Opportunities
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Gain hands-on experience and build your career in the world of academic publishing and research.
                    </p>
                </CardContent>
            </Card>
        </BannerCarousel>

        <section className="container mx-auto px-4 py-16 md:py-24">
            {isLoading ? (
            <div className="flex items-center justify-center py-24">
                <Logo className="h-32 w-32" />
            </div>
            ) : internships.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {internships.map(internship => (
                <Card key={internship.id} className="group relative w-full max-w-sm mx-auto overflow-hidden rounded-2xl shadow-2xl border-transparent transition-all duration-500 hover:shadow-primary/20">
                    <div className="relative h-96 w-full">
                        <Image src={internship.imageSrc} alt={internship.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="internship opportunity"/>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-[calc(100%-100px)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-black/40 backdrop-blur-sm">
                        <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-xl font-bold">{internship.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <p className="text-sm text-white/90 line-clamp-3 mb-6">{internship.description}</p>
                            <div className="flex flex-col gap-3">
                                <Dialog>
                                    <DialogTrigger asChild>
                                    <Button className="w-full bg-primary/80 hover:bg-primary text-primary-foreground border-primary-foreground/50 border">
                                        Register Now <ArrowRight className="ml-2 h-4 w-4 icon-pulse" />
                                    </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
                                    <DialogHeader>
                                        <DialogTitle>Apply for: {internship.name}</DialogTitle>
                                        <DialogDescription>
                                        Please fill out your details below to apply. We will get back to you shortly.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex-grow overflow-y-auto pr-6 -mr-2">
                                        <ScrollArea className="h-full">
                                            <ContactForm 
                                                inquiryType="Internship Application"
                                                details={internship.name}
                                            />
                                        </ScrollArea>
                                    </div>
                                    </DialogContent>
                                </Dialog>
                                <Button 
                                    variant="outline" 
                                    className="w-full bg-transparent text-white border-white/50 hover:bg-white/10"
                                    disabled={!internship.brochureUrl}
                                    onClick={() => handleDownloadBrochure(internship.brochureUrl!, internship.name)}
                                >
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Brochure
                                </Button>
                            </div>
                        </CardContent>
                    </div>
                </Card>
                ))}
            </div>
            ) : (
            <div className="flex items-center justify-center text-center py-16 text-muted-foreground">
                <p>No internship opportunities are available at this time. Please check back later.</p>
            </div>
            )}
        </section>
    </div>
  );
}
