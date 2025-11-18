// src/app/(public)/page.tsx
'use client';
import { Metadata } from 'next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookCheck, BrainCircuit, Microscope, ShieldCheck, Database, GitBranch, Cpu, Presentation, GraduationCap, Award, Briefcase, BookOpen, FileText, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getJournals, Journal } from "@/services/journalService";
import BannerCarousel from '@/components/ui/banner-carousel';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import * as React from 'react';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";


const indexedJournalCategories = [
  {
    title: "Scopus Indexed Journals",
    description: "Scopus Q1/Q2, A Scopus journal is a scholarly journal that is indexed (listed) in Scopus, which is one of the largest abstract and citation databases of peer-reviewed literature, maintained by a Elsevier.",
    imageSrc: "https://images.unsplash.com/photo-1579547945413-49751d66aa68?q=80&w=800&auto=format&fit=crop",
    imageHint: "medical biology",
  },
  {
    title: "Web of Science (WoS) Indexed Journals",
    description: "Featuring top-tier journals from SCIE, SSCI, and AHCI for maximum impact and citation.Globally recognized journals ensures high-quality, impactful research",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    imageHint: "science research",
  },
  {
    title: "IEEE Xplore Indexed Journals",
    description: "IEEE Xplore is a leading digital library that hosts high-quality journals, conference papers, Journals and standards in engineering, technology, and computer science.",
    imageSrc: "https://images.unsplash.com/photo-1532187644165-ba22fb5d6d36?q=80&w=800&auto=format&fit=crop",
    imageHint: "engineering technology",
  },
  {
    title: "UGC Care / Peer Review Journals",
    description: "Trusted journals approved by UGC for authentic and credible research publications. Scholarly articles reviewed by experts to ensure quality, accuracy, and reliability.",
    imageSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
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
  { src: 'https://logodix.com/logo/1988856.png', alt: 'Partner 1 Logo - Scopus', hint: 'logo scopus' },
  { src: 'https://logodix.com/logo/1988895.png', alt: 'Partner 2 Logo - Web of Science', hint: 'logo web of science' },
  { src: 'https://logodix.com/logo/1988901.png', alt: 'Partner 3 Logo - IEEE', hint: 'logo ieee' },
  { src: 'https://topazconsultancy.in/images/conference-publication-services-in-india.png', alt: 'Partner 4 Logo - UGC', hint: 'logo ugc' },
  { src: 'https://fourwaves.com/blog/wp-content/uploads/2021/08/logo-fourwaves-transparent.png', alt: 'Partner 5 Logo - Fourwaves', hint: 'logo fourwaves' },
  { src: 'https://raw.githubusercontent.com/cybrix-research/website/main/public/images/partners/crossref.png', alt: 'Partner 6 Logo - Crossref', hint: 'logo crossref' },
  { src: 'https://raw.githubusercontent.com/cybrix-research/website/main/public/images/partners/doaj.png', alt: 'Partner 7 Logo - DOAJ', hint: 'logo doaj' },
  { src: 'https://raw.githubusercontent.com/cybrix-research/website/main/public/images/partners/ebsco.png', alt: 'Partner 8 Logo - EBSCO', hint: 'logo ebsco' },
];
                                                      

function IndexedJournalsSection() {
  return (
    <section id="highlights" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Indexed Journals</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Publish in High-Impact Journals</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
             We offer expert academic writing services and research paper writing help to get your scholarly articles published in top peer-reviewed journals, including Scopus and Web of Science.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {indexedJournalCategories.map(category => (
            <Card key={category.title} className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-48 w-full">
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={category.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-primary">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{category.description}</p>
              </CardContent>
              <CardFooter>
                 <Button variant="link" asChild className="p-0">
                    <Link href="/publications">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const bannerItems = [
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&h=1080&auto=format&fit=crop", alt: "Team collaborating on a research paper", title: "Accelerate Your Research Publication", description: "From manuscript preparation to international journal publication, our expert services empower researchers to achieve their goals with confidence.", hint: "team collaboration" },
    { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&h=1080&auto=format&fit=crop", alt: "Professionals in a meeting discussing a scientific manuscript", title: "End-to-End Publication Support", description: "We provide cutting-edge tools and expert guidance for academic writing, manuscript editing, and journal submission.", hint: "business meeting" },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&h=1080&auto=format&fit=crop", alt: "Team brainstorming research ideas", title: "From Idea to Impactful Publication", description: "Partner with us to turn your innovative ideas into high-quality, peer-reviewed scholarly articles.", hint: "team working" },
];


export default function HomePage() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [bgImage, setBgImage] = React.useState(bannerItems[0].src);

  const mainCarouselPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const onSelect = React.useCallback(() => {
    if (!mainApi) return
    const newSelectedIndex = mainApi.selectedScrollSnap();
    setBgImage(bannerItems[newSelectedIndex].src);
  }, [mainApi])

  React.useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
  }, [mainApi, onSelect])

  return (
    <>
      <section 
        className="w-full relative bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out h-screen flex items-center group/banner"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent z-10" />
        <div className="container relative z-20 mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
                <Carousel 
                    setApi={setMainApi} 
                    className="w-full"
                    plugins={[mainCarouselPlugin.current]}
                    opts={{ loop: true }}
                >
                    <CarouselContent className="h-[300px]">
                    {bannerItems.map((item, index) => (
                        <CarouselItem key={index} className="text-white flex flex-col justify-center animate-fade-in-up">
                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                              {item.title}
                            </h1>
                            <p className="mt-6 text-lg text-white/80 md:text-xl max-w-2xl mx-auto">
                              {item.description}
                            </p>
                            <div className="flex gap-4 mt-8 justify-center">
                                <Button size="lg" asChild>
                                    <Link href="/about">Learn More</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                                    <Link href="/publications">View Portfolio</Link>
                                </Button>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
      </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Key Services</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        From research paper writing help to conference management, we provide a complete suite of publication support services.
                    </p>
                </div>
            </div>
             <div className="relative mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex w-max animate-scroll-x">
                    {[...keyServices, ...keyServices].map((service, index) => (
                        <Card key={index} className="m-4 w-[350px] shrink-0 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
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

        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
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
                        <div 
                            key={index}
                            className="mx-8 flex h-16 w-auto items-center justify-center"
                        >
                            <Image 
                                src={logo.src} 
                                width={150} 
                                height={60} 
                                alt={logo.alt} 
                                data-ai-hint={logo.hint}
                                className="h-16 w-auto object-contain" 
                            />
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>
    </>
  );
}
