import { FileUp, Search, UserCheck, MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";
import React from "react";
import Image from "next/image";

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
    return (
        <div>
            <section className="relative w-full h-[400px] bg-primary/10 flex items-center justify-center text-center px-4">
                <Image
                    src="/peer-review.png"
                    alt="Peer Review Process"
                    data-ai-hint="research paper"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Upholding Academic Integrity
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Our commitment to quality through a rigorous, transparent, and constructive peer-review process.
                    </p>
                </div>
            </section>

             <section className="w-full py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                            <Image
                                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&h=800&auto=format&fit=crop"
                                alt="Collaborative Review"
                                data-ai-hint="team collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                             <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Our Philosophy</div>
                            <h2 className="text-3xl font-bold tracking-tighter">A Foundation of Trust & Quality</h2>
                            <p className="text-muted-foreground text-justify">
                                At Pure Research Insights, we believe that rigorous peer review is the cornerstone of high-quality academic publishing. Our process is designed not only to validate research but also to provide constructive feedback that enhances the final publication. By engaging independent experts, we ensure that every article meets the highest standards of scientific merit, originality, and significance, thereby fostering trust within the global research community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-secondary/50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our <span className="text-primary">Peer Review</span> Process</h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                            We follow a systematic, multi-step process to ensure that every published article is credible, original, and scientifically sound.
                        </p>
                    </div>

                    <div className="relative max-w-3xl mx-auto">
                        {/* The vertical line */}
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>

                        <div className="space-y-16">
                            {reviewSteps.map((step, index) => (
                                <div key={index} className="relative flex items-center justify-center">
                                    <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                            <div className={`bg-background p-6 rounded-lg shadow-lg border border-primary/10 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                                <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                                                <p className="text-muted-foreground">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 bg-background p-1 rounded-full border-2 border-primary/20">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                            <step.icon className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
