
// src/app/(public)/publications/conference-proceedings/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck2, Presentation, Globe, Database, Link as LinkIcon, BookLock } from "lucide-react";
import Image from "next/image";
import BannerCarousel from "@/components/ui/banner-carousel";

const benefits = [
    {
        icon: Globe,
        title: "Global Dissemination",
        description: "Present your work to an international audience and have it published in our indexed conference proceedings."
    },
    {
        icon: Presentation,
        title: "Oral & Poster Presentations",
        description: "Accepted abstracts are considered for both oral presentations and poster sessions at our conferences."
    },
    {
        icon: FileCheck2,
        title: "Peer-Reviewed Content",
        description: "All submissions undergo a rigorous peer-review process by our expert editorial committees."
    }
];

const services = [
    {
        icon: Database,
        title: "Indexing & Archiving",
        description: "We ensure your proceedings are indexed in major academic databases like Scopus and Web of Science for maximum visibility and citation."
    },
    {
        icon: LinkIcon,
        title: "DOI Assignment",
        description: "Every paper published in our proceedings is assigned a unique Digital Object Identifier (DOI) for permanent and reliable citation."
    },
    {
        icon: BookLock,
        title: "Open Access Options",
        description: "We offer flexible open access publishing options to make your research freely available to a global audience, increasing its impact."
    }
]

export default function ConferenceProceedingsPage() {
    const bannerImages = [
        { src: "/conference-proceeding.png", alt: "Conference Presentation", hint: "conference presentation" }
    ];
    return (
        <div className="bg-secondary/30">
            <BannerCarousel images={bannerImages}>
                 <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                            Conference Proceedings
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                            Share your research on a global stage. All accepted abstracts from our conferences are published in our prestigious, indexed Conference Proceedings.
                        </p>
                         <Button size="lg" className="mt-8" asChild>
                            <a href="/conference">
                                View Upcoming Conferences <ArrowRight className="ml-2 h-5 w-5 icon-pulse" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </BannerCarousel>
            
            <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 text-center md:text-left">
                            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Why Publish With Us?</div>
                            <h2 className="text-3xl font-bold tracking-tighter">Amplify Your Research Impact</h2>
                            <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/80 md:text-xl">
                                Our conference proceedings offer a unique platform to disseminate your findings, gain valuable feedback, and connect with a global network of researchers and industry leaders.
                            </p>
                             <ul className="space-y-4 pt-4 text-left">
                                {benefits.map((benefit) => (
                                    <li key={benefit.title} className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full mt-1">
                                            <benefit.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-80 md:h-full w-full">
                            <div className="absolute -top-8 -bottom-8 -right-8 w-2/3 bg-primary/10 transform -skew-x-6"></div>
                            <div className="absolute inset-0 p-4">
                                <Image 
                                    src="/photo3.jpg"
                                    alt="Researchers collaborating"
                                    data-ai-hint="research collaboration"
                                    fill
                                    className="object-cover rounded-lg shadow-2xl" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             <section className="w-full pb-16 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter">Our Services</h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                            We provide a complete suite of services to ensure your work is published professionally and reaches the widest possible audience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} className="text-center flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-primary/10">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full w-fit mb-3">
                                        <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
