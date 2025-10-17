
import { FileUp, Search, UserCheck, MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BannerCarousel from "@/components/ui/banner-carousel";

const reviewSteps = [
    {
        icon: FileUp,
        title: "Manuscript Submission",
        description: "Authors submit their complete research manuscript through our online portal for initial consideration."
    },
    {
        icon: Search,
        title: "Initial Editorial Screening",
        description: "Our in-house editors conduct a thorough check for scope, originality, plagiarism, and formatting compliance."
    },
    {
        icon: UserCheck,
        title: "Peer Reviewer Assignment",
        description: "The manuscript is assigned to qualified, independent experts in the relevant field for a detailed evaluation."
    },
    {
        icon: MessageSquare,
        title: "Constructive Feedback & Revisions",
        description: "Authors receive anonymized, constructive feedback from reviewers and are invited to make necessary revisions."
    },
    {
        icon: CheckCircle,
        title: "Final Decision & Publication",
        description: "The revised manuscript is reassessed, and upon final approval, it proceeds to the publication stage."
    }
];

export default function PeerReviewPage() {
    const bannerImages = [
        { src: "/peer-review.png", alt: "Peer Review Process", hint: "research paper" }
    ];
    return (
        <div className="bg-background">
            <BannerCarousel images={bannerImages}>
                <Card className="relative z-20 w-full max-w-3xl bg-background/60 backdrop-blur-md text-center">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                            Upholding Academic Integrity
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                            Our commitment to quality through a rigorous, transparent, and constructive peer-review process.
                        </p>
                    </CardContent>
                </Card>
            </BannerCarousel>

             <section className="w-full py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-80 md:h-full w-full">
                            <div className="absolute -top-8 -bottom-8 -left-8 w-2/3 bg-primary/10 transform skew-x-6"></div>
                            <div className="absolute inset-0 p-4">
                                <Image
                                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&h=800&auto=format&fit=crop"
                                    alt="Collaborative Review"
                                    data-ai-hint="team collaboration"
                                    fill
                                    className="object-cover rounded-lg shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="space-y-6">
                             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">Our Philosophy</div>
                            <h2 className="text-3xl font-bold tracking-tighter text-foreground">A Foundation of Trust & Quality</h2>
                            <p className="text-muted-foreground text-justify text-lg">
                                At Cybrix, we believe that rigorous peer review is the cornerstone of high-quality academic publishing. Our process is designed not only to validate research but also to provide constructive feedback that enhances the final publication. By engaging independent experts, we ensure that every article meets the highest standards of scientific merit, originality, and significance, thereby fostering trust within the global research community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our <span className="text-primary">Peer Review</span> Process</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            We follow a systematic, multi-step process to ensure that every published article is credible, original, and scientifically sound.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="flex items-center justify-between">
                            {reviewSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center w-64 z-10">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full ring-8 ring-background mb-4">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary mb-1">{`Step ${index + 1}`}</h3>
                                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-8 left-0 w-full h-0.5 bg-primary/20 -z-0"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}
