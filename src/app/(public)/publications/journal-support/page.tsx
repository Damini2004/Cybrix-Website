
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileText, Users, BookUp, Sparkles, ArrowRight } from "lucide-react";
import BannerCarousel from "@/components/ui/banner-carousel";

const supportInfo = [
    {
        icon: FileText,
        title: "What to Submit",
        description: "Researchers are encouraged to submit an abstract that addresses scientific questions, details engineering research observations, or contains primary scientific data."
    },
    {
        icon: Users,
        title: "Peer Review Process",
        description: "Abstracts are peer-reviewed by the Conferences Editorial Committee and will be considered for either oral or poster presentation."
    },
    {
        icon: BookUp,
        title: "Publication of Abstracts",
        description: "All accepted abstracts are published in the Conference Proceedings, which serves as an online supplement to our Journals."
    },
    {
        icon: Sparkles,
        title: "Unique Meeting Themes",
        description: "Each meeting, conference, and workshop is unique in the specific types of engineering & technology-related research that are eligible for submission."
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

        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image 
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=600&auto=format&fit=crop"
                            alt="Team working on a project"
                            data-ai-hint="team working"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    </div>
                    <div className="space-y-6">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">
                            Guidance for Authors
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter">Abstract Submission Guidelines</h2>
                        <p className="text-lg text-muted-foreground">
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
                    <h2 className="text-3xl font-bold tracking-tight">Key Information for Authors</h2>
                    <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                        Understand the journey of your abstract from submission to publication. Here’s what you need to know.
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
