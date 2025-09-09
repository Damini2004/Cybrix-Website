// src/app/(public)/conference/awards/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, UserCheck, Lightbulb } from "lucide-react";
import Image from "next/image";

const awardCategories = [
    {
        icon: Award,
        title: "Best Paper Award",
        description: "Presented to the author(s) of the most outstanding paper, selected for its originality, technical excellence, and clarity of presentation."
    },
    {
        icon: BookOpen,
        title: "Best Poster Award",
        description: "Awarded to the most innovative and well-presented research poster, recognizing the quality of the research and the effectiveness of the visual display."
    },
    {
        icon: UserCheck,
        title: "Young Researcher Award",
        description: "Recognizing an outstanding young scientist who has shown exceptional promise and has made a significant contribution to their field early in their career."
    },
    {
        icon: Lightbulb,
        title: "Innovation in Technology Award",
        description: "This award celebrates a groundbreaking technological innovation presented at the conference that has the potential for significant real-world impact."
    }
];

export default function AwardsPage() {
  return (
    <div className="bg-secondary/30">
        <section className="relative w-full h-[400px] bg-primary/10 flex items-center justify-center text-center px-4">
            <Image
                src="https://images.unsplash.com/photo-1578909196432-cbe5205d0491?q=80&w=1600&h=400&auto=format&fit=crop"
                alt="Awards Ceremony"
                data-ai-hint="awards ceremony"
                fill
                className="object-cover opacity-10"
            />
            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Awards & Recognition
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    PRI is committed to celebrating excellence in research and innovation. Our awards honor the outstanding contributions of researchers and scholars who are pushing the boundaries of knowledge.
                </p>
            </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                         <Image
                            src="https://images.unsplash.com/photo-1639149545952-3023a953d613?q=80&w=800&h=600&auto=format&fit=crop"
                            alt="Award Trophy"
                            data-ai-hint="award trophy"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                         <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Celebrating Excellence</div>
                        <h2 className="text-3xl font-bold tracking-tighter">Honoring Groundbreaking Research</h2>
                        <p className="text-muted-foreground text-justify">
                            The PRI Awards program is designed to recognize and celebrate the exceptional achievements of individuals and teams whose work demonstrates scientific rigor, innovation, and the potential for significant impact. By acknowledging these contributions, we aim to inspire the next generation of researchers and foster a culture of excellence within the global academic community. Each award is a testament to the dedication and intellectual curiosity that drives scientific progress forward.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter">Award Categories</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        We are proud to offer a variety of awards to recognize outstanding work across different formats and career stages.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {awardCategories.map((award, index) => (
                    <Card key={index} className="text-center flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-primary/10">
                    <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full w-fit mb-3">
                        <award.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle>{award.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{award.description}</p>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
        </section>
    </div>
  );
}
