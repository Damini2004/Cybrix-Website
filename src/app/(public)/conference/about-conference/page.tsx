

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Presentation, BookOpen, Users, Award } from "lucide-react";
import Image from "next/image";

const corePrinciples = [
    {
        icon: Users,
        title: "Fostering Collaboration",
        description: "We create environments that encourage networking and interdisciplinary collaboration among academics, researchers, and industry professionals."
    },
    {
        icon: Presentation,
        title: "Promoting Innovation",
        description: "Our conferences are platforms for showcasing cutting-edge research and innovative ideas that have the potential to shape the future."
    },
    {
        icon: CheckCircle,
        title: "Ensuring Quality",
        description: "Through a rigorous peer-review process, we maintain the highest standards of academic integrity and quality for all presented work."
    },
    {
        icon: Award,
        title: "Global Reach",
        description: "We aim to bring together diverse perspectives from around the world to enrich discussions and broaden the impact of research."
    }
];

const conferenceServices = [
    {
        icon: Presentation,
        title: "Event Management",
        description: "Comprehensive planning and execution for conferences of all sizes."
    },
    {
        icon: BookOpen,
        title: "Proceedings Publication",
        description: "Ensuring your research reaches a global audience through indexed publications."
    },
    {
        icon: Users,
        title: "Speaker & Sponsor Coordination",
        description: "Connecting your event with leading voices and industry partners."
    },
    {
        icon: Award,
        title: "Awards & Recognition",
        description: "Celebrating academic excellence and outstanding contributions."
    }
];

export default function AboutConferencePage() {
  return (
    <div className="bg-secondary/30">
        <section className="relative w-full py-20 md:py-32 text-center text-white bg-primary">
             <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
                alt="Conference audience"
                fill
                className="object-cover opacity-20"
                data-ai-hint="conference audience"
            />
            <div className="container relative z-10 px-4 md:px-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About PRI Conferences</h1>
                <p className="mt-4 max-w-[900px] mx-auto text-white/90 md:text-xl/relaxed">
                    Advancing knowledge and fostering innovation by connecting the brightest minds from around the globe.
                </p>
            </div>
        </section>
        
        <section className="relative w-full py-16 md:py-24">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission in Conferencing</h2>
                        <p className="text-lg text-muted-foreground">
                             At PRI, our mission is to provide a premier platform for researchers, academics, and industry professionals to present and discuss the most recent innovations, trends, and concerns in various fields of engineering and technology.
                        </p>
                    </div>
                    <div className="relative h-96 w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]">
                        <div className="w-full animate-scroll-y space-y-4">
                            {[...corePrinciples, ...corePrinciples].map((principle, index) => (
                                <Card key={`${principle.title}-${index}`} className="bg-background/80 backdrop-blur-sm border-white/20">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <div className="p-3 bg-primary/10 rounded-full">
                                            <principle.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg text-card-foreground">{principle.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter">Conference Services</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        We offer a comprehensive range of services to make your conference a success.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                    {conferenceServices.map((service, index) => (
                        <Card key={service.title} className="group relative overflow-hidden rounded-xl border bg-background text-center shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2">
                            <CardContent className="p-6">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <service.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}
