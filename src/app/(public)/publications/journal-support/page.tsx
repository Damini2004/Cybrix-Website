

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileText, Users, BookUp, Sparkles, ArrowRight, BookOpen } from "lucide-react";
import BannerCarousel from "@/components/ui/banner-carousel";

const supportInfo = [
    {
        icon: FileText,
        title: "Submission Content",
        description: "We invite researchers to submit abstracts that explore scientific inquiries, present observations from engineering research, or include primary scientific data."
    },
    {
        icon: Users,
        title: "Review and Presentation",
        description: "The Conference Editorial Committee conducts a peer review of all abstracts, which may be selected for an oral presentation or a poster session."
    },
    {
        icon: BookUp,
        title: "Abstract Publication",
        description: "Every accepted abstract is featured in the official Conference Proceedings, available as an online supplement to our journals."
    },
    {
        icon: Sparkles,
        title: "Event-Specific Themes",
        description: "Each meeting, conference, and workshop has distinct themes, accepting only research related to specific fields of engineering and technology."
    }
]

export default function JournalSupportPage() {
    const bannerImages = [
        { src: "/journal-support.png", alt: "Journal Support", hint: "researcher writing" }
    ];

  return (
    <div className="bg-secondary/30">
        <BannerCarousel images={bannerImages}>
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Journal Publication Support
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Navigating the path to publication with expert guidance and dedicated support.
                    </p>
                </CardContent>
            </Card>
        </BannerCarousel>

        <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-80 md:h-full w-full">
                        <div className="absolute -top-8 -bottom-8 -left-8 w-2/3 bg-primary/10 transform skew-x-6"></div>
                        <div className="absolute inset-0 p-4">
                             <Image 
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=600&auto=format=fit=crop"
                                alt="Team working on a project"
                                data-ai-hint="team working"
                                fill
                                className="object-cover rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-white">
                            Guidance for Authors
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter">Abstract Submission Guidelines</h2>
                        <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/80 md:text-xl">
                            Cybrix’s Conferences, Meetings, Summits, and Workshops offer vibrant scientific programs with the opportunity for attendees to submit and present their groundbreaking data.
                        </p>
                        <Button size="lg" asChild>
                            <a href="/submit-journal">
                                Submit Your Abstract Now <ArrowRight className="ml-2 h-5 w-5 icon-pulse" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
             <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Essential Author Information</h2>
                    <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                        Follow your abstract's path from submission to becoming a published work. Here is what you should know.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {supportInfo.map((item, index) => (
                        <Card key={index} className="bg-background border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                            <CardHeader className="items-center text-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-3">
                                    <item.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}
