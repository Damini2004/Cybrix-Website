// src/app/(public)/publications/conference-proceedings/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck2, Presentation, Globe, Database, Link as LinkIcon, BookLock } from "lucide-react";
import Image from "next/image";

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
    return (
        <div>
            <section className="relative w-full h-[400px] bg-primary/10 flex items-center justify-center text-center px-4">
                <Image
                    src="/conference-proceeding.png"
                    alt="Conference Presentation"
                    data-ai-hint="conference presentation"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Conference Proceedings
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Share your research on a global stage. All accepted abstracts from our conferences are published in our prestigious, indexed Conference Proceedings.
                    </p>
                    <Button size="lg" className="mt-8" asChild>
                        <a href="/conference">
                            View Upcoming Conferences <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </section>
            
            <section className="w-full py-16 md:py-24 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                            <Image
                                src="/photo3.jpg"
                                alt="Researchers collaborating"
                                data-ai-hint="research collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Why Publish With Us?</div>
                            <h2 className="text-3xl font-bold tracking-tighter">Amplify Your Research Impact</h2>
                            <p className="text-muted-foreground">
                                Our conference proceedings offer a unique platform to disseminate your findings, gain valuable feedback, and connect with a global network of researchers and industry leaders.
                            </p>
                            <ul className="space-y-4">
                                {benefits.map((benefit) => (
                                    <li key={benefit.title} className="flex items-start gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full mt-1">
                                            <benefit.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{benefit.title}</h4>
                                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             <section className="w-full py-16 md:py-24 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter">Our Services</h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                            We provide a complete suite of services to ensure your work is published professionally and reaches the widest possible audience.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Card key={service.title} className="text-center flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
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
