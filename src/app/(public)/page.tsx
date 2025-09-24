
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
    imageSrc: "/scopus.png",
    imageHint: "medical biology",
  },
  {
    title: "Web of Science (WoS) Indexed Journals",
    description: "Featuring top-tier journals from SCIE, SSCI, and AHCI for maximum impact and citation.Globally recognized journals ensures high-quality, impactful research",
    imageSrc: "/wos.png",
    imageHint: "science research",
  },
  {
    title: "IEEE Xplore Indexed Journals",
    description: "IEEE Xplore is a leading digital library that hosts high-quality journals, conference papers, Journals and standards in engineering, technology, and computer science.",
    imageSrc: "/IEEE.png",
    imageHint: "engineering technology",
  },
  {
    title: "UGC Care / Peer Review Journals",
    description: "Trusted journals approved by UGC for authentic and credible research publications. Scholarly articles reviewed by experts to ensure quality, accuracy, and reliability.",
    imageSrc: "/photo7.png",
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
  { src: "/army institute.png", alt: "army institute", hint: "logo company" },
  { src: "/Bharti vidyapith.png", alt: "Bharti vidyapith", hint: "logo company" },
    { src: "/city university punjab.jpeg", alt: "city university punjab", hint: "logo company" },
      { src: "/csmss.jpeg", alt: "csmss", hint: "logo company" },
        { src: "/data meghe wardha.png", alt: "data meghe wardha", hint: "logo company" },
          { src: "/deogiri aurangabad.jpeg", alt: "deogiri aurangabad", hint: "logo brand" },
            { src: "/dypatil.jpeg", alt: "Partner Logo 3", hint: "logo business" },
              { src: "/iiit.jpeg", alt: "Partner Logo 4", hint: "logo tech" },
                { src: "/kkr guntur.png", alt: "Partner Logo 5", hint: "logo education" },
                  { src: "/krishana.png", alt: "deogiri aurangabad", hint: "logo brand" },
                    { src: "/lovely university.png", alt: "Partner Logo 3", hint: "logo business" },
                      { src: "/Mahsa Malaysiaya.png", alt: "Partner Logo 4", hint: "logo tech" },
                        { src: "/manipal.png", alt: "Partner Logo 5", hint: "logo education" },
                          { src: "/modern institute.jpeg", alt: "Partner Logo 5", hint: "logo education" },
                            { src: "/nitwarangal.png", alt: "deogiri aurangabad", hint: "logo brand" },
                              { src: "/noida.png", alt: "Partner Logo 3", hint: "logo business" },
                                { src: "/Nus.png", alt: "Partner Logo 4", hint: "logo tech" },
                                  { src: "/priyadarshani.png", alt: "Partner Logo 5", hint: "logo education" },
                                    { src: "/ramdeobaba.jpeg", alt: "Partner Logo 5", hint: "logo education" },
                                      { src: "/rl jalapa.png", alt: "deogiri aurangabad", hint: "logo brand" },
                                        { src: "/sanjevini kopargoa.png", alt: "Partner Logo 3", hint: "logo business" },
                                          { src: "/ssvps.png", alt: "Partner Logo 4", hint: "logo tech" },
                                            { src: "/priyadarshani.png", alt: "Partner Logo 5", hint: "logo education" },
                                              { src: "/suryodaya.jpeg", alt: "Partner Logo 5", hint: "logo education" },
                                                { src: "/syboisis.png", alt: "deogiri aurangabad", hint: "logo brand" },
                                                  { src: "/sanjevini kopargoa.png", alt: "Partner Logo 3", hint: "logo business" },
                                                    { src: "/vincentpalloti.jpeg", alt: "Partner Logo 4", hint: "logo tech" },
                                                      { src: "/Vnit.jpeg", alt: "Partner Logo 5", hint: "logo education" },
                                                      ]

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
  const bannerImages = [
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&h=800&auto=format&fit=crop", alt: "Business meeting", hint: "team collaboration" },
    { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&h=600&auto=format&fit=crop", alt: "Team working", hint: "business meeting" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&h=900&auto=format&fit=crop", alt: "Conference presentation", hint: "presentation" }
  ];

  return (
    <>
      <section className="w-full bg-secondary">
          <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 min-h-[600px]">
                  <div className="flex flex-col justify-center p-8 md:p-12 text-center lg:text-left">
                      <p className="font-semibold text-primary tracking-widest uppercase">Creative Portfolio</p>
                      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                          WE PROVIDE EFFECTIVE FOR BUSINESS SOLUTIONS
                      </h1>
                      <p className="mt-6 max-w-xl text-lg text-foreground/80 md:text-xl mx-auto lg:mx-0">
                          Our solutions empower researchers and businesses to save time, gain deeper understanding, and move forward with confidence.
                      </p>
                      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                          <Button size="lg" asChild>
                              <Link href="/about">
                                  Learn More
                              </Link>
                          </Button>
                          <Button size="lg" variant="outline" asChild>
                              <Link href="/publications">View Portfolio</Link>
                          </Button>
                      </div>
                  </div>
                  <div className="relative min-h-[300px] lg:min-h-0">
                      <BannerCarousel images={bannerImages} />
                  </div>
              </div>
          </div>
      </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Key Services</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Get expert consultancy and support with our advisory firm that stands by your side always.
                    </p>
                </div>
            </div>
            <div className="mt-12">
                <Card className="bg-secondary">
                    <CardContent className="p-8">
                        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                            {keyServices.map((service) => (
                                <div key={service.title} className="flex flex-col items-center text-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border bg-background mb-4 animate-dance">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-md font-bold">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
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
