import { FileUp, Search, UserCheck, MessageSquare, CheckCircle } from "lucide-react";
import React from "react";

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
        <div className="bg-secondary/50 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our <span className="text-primary">Peer Review</span> Process</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We are committed to upholding the highest standards of academic integrity. Our rigorous, multi-step peer review process ensures that every published article is credible, original, and scientifically sound.
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
    );
}
