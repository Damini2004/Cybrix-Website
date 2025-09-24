
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookCheck, BrainCircuit, Microscope, ShieldCheck, Database, GitBranch, Cpu, Presentation, GraduationCap, Award, Briefcase, BookOpen, FileText, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getJournals, Journal } from "@/services/journalService";
import BannerCarousel from '@/components/ui/banner-carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Home | Academic Publishing & Conference Management',
  description: 'Cybrix empowers researchers and businesses with expert solutions for journal submissions, conference organization, and publication consultancy.',
};


const indexedJournalCategories = [
  {
    title: "Scopus Indexed Journals",
    description: "Scopus Q1/Q2, A Scopus journal is a scholarly journal that is indexed (listed) in Scopus, which is one of the largest abstract and citation databases of peer-reviewed literature, maintained by a Elsevier.",
    imageSrc: "https://images.unsplash.com/photo-1579547945413-49751d66aa68?q=80&w=800&auto=format=fit=crop",
    imageHint: "medical biology",
  },
  {
    title: "Web of Science (WoS) Indexed Journals",
    description: "Featuring top-tier journals from SCIE, SSCI, and AHCI for maximum impact and citation.Globally recognized journals ensures high-quality, impactful research",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format=fit=crop",
    imageHint: "science research",
  },
  {
    title: "IEEE Xplore Indexed Journals",
    description: "IEEE Xplore is a leading digital library that hosts high-quality journals, conference papers, Journals and standards in engineering, technology, and computer science.",
    imageSrc: "https://images.unsplash.com/photo-1532187644165-ba22fb5d6d36?q=80&w=800&auto=format=fit=crop",
    imageHint: "engineering technology",
  },
  {
    title: "UGC Care / Peer Review Journals",
    description: "Trusted journals approved by UGC for authentic and credible research publications. Scholarly articles reviewed by experts to ensure quality, accuracy, and reliability.",
    imageSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format=fit=crop",
    imageHint: "academic books",
  },
];

const keyServices = [
    {
        icon: Cpu,
        title: "Software Solutions",
        description: "RAMS & SDGMapper for reliability and sustainable development goal tracking."
    },
    {
        icon: Presentation,
        title: "Conference Management",
        description: "End-to-end support for organizing successful academic conferences."
    },
    {
        icon: Award,
        title: "EB-1 Consultancy",
        description: "Expert assistance for navigating the EB-1 visa application process."
    },
    {
        icon: Briefcase,
        title: "Internship Services",
        description: "Connecting talented students with valuable research internship opportunities."
    },
    {
        icon: BookOpen,
        title: "PhD Services",
        description: "Comprehensive support throughout your entire PhD journey."
    },
    {
        icon: FileText,
        title: "Publications Consultancy",
        description: "Assistance with manuscript preparation and publishing in high-impact journals."
    },
]

const partnerLogos = [
  { src: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 1', hint: 'team meeting' },
  { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 2', hint: 'team collaboration' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 3', hint: 'business meeting' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 4', hint: 'office work' },
  { src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 5', hint: 'team working' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 6', hint: 'group discussion' },
  { src: 'https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 7', hint: 'presentation' },
  { src: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 8', hint: 'business workshop' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 9', hint: 'tech team' },
  { src: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=400&h=200&auto=format=fit=crop', alt: 'Partner 10', hint: 'diverse team' },
];
                                                      

function IndexedJournalsSection() {
  return (
    <section id="highlights" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Indexed Journals</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Publish in High-Impact Journals</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive support for publishing in a wide range of prestigious, indexed journals.
            </p>
          </div>
        </div>
        <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto mt-12"
        >
            <CarouselContent className="-ml-8">
               {indexedJournalCategories.map(category => (
                <CarouselItem key={category.title} className="pl-8 md:basis-1/2 lg:basis-1/3">
                    <Card className="highlight-card h-full flex flex-col">
                        <div className="visual">
                            <Image
                                src={category.imageSrc}
                                alt={category.title}
                                width={384}
                                height={192}
                                className="img"
                                data-ai-hint={category.imageHint}
                            />
                        </div>
                        <div className="content">
                            <div className="content-wrapper">
                            <h3 className="title">{category.title}</h3>
                            <p className="desc">{category.description}</p>
                            </div>
                            <Link href="/publications" className="card-link">
                                Learn more
                            </Link>
                        </div>
                    </Card>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px]" />
            <CarouselNext className="right-[-50px]" />
        </Carousel>
      </div>
    </section>
  )
}


export default function HomePage() {
  return (
    <>
      <section className="relative w-full h-[600px] bg-secondary/30 overflow-hidden">
        <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&h=1080&auto=format=fit=crop"
            alt="Team collaborating in a modern office"
            fill
            className="object-cover opacity-55"
            data-ai-hint="team collaboration"
        />
        <div className="container mx-auto px-4 h-full grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                  Creative Portfolio
              </h1>
              <p className="mt-6 max-w-xl text-lg text-foreground/80 md:text-xl">
                  Our solutions empower researchers and businesses to save time, gain deeper understanding, and move forward with confidence.
              </p>
              <div className="flex gap-4 mt-8">
                  <Button size="lg" asChild>
                      <Link href="/about">Learn More</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                      <Link href="/publications">View Portfolio</Link>
                  </Button>
              </div>
          </div>
          <div className="relative h-full w-full hidden md:flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white_50%,transparent_100%)]">
            <div className="w-max animate-scroll-y space-y-4">
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                    <div 
                        key={index} 
                        className="p-2 rounded-lg shadow-md w-80 h-40 flex items-center justify-center border-4 border-primary/50"
                    >
                        <Image 
                            src={logo.src} 
                            width={400} 
                            height={220} 
                            alt={logo.alt} 
                            data-ai-hint={logo.hint}
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>


        </div>
      </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Key Services</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Get expert consultancy and support with our advisory firm that stands by your side always.
                    </p>
                </div>
            </div>
             <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex w-max animate-scroll-x">
                    {[...keyServices, ...keyServices].map((service, index) => (
                        <Card key={index} className="m-4 w-[350px] shrink-0 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                             <CardHeader className="items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary/20 bg-primary/10 mb-4 transition-all duration-300 group-hover:scale-110">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
          </div>
        </section>
        
        <IndexedJournalsSection />

        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Associations & Partners</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are proud to collaborate with leading institutions and organizations in the academic community.
                </p>
              </div>
            </div>
             <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex w-max animate-scroll-x">
                    {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                        <Image 
                            key={index}
                            src={logo.src} 
                            width={150} 
                            height={60} 
                            alt={logo.alt} 
                            data-ai-hint={logo.hint}
                            className="mx-8 h-16 w-auto object-contain" 
                        />
                    ))}
                </div>
            </div>
          </div>
        </section>
    </>
  );
}
