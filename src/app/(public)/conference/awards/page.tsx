// src/app/(public)/conference/awards/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BookOpen, UserCheck, Lightbulb } from "lucide-react";
import Image from "next/image";
import BannerCarousel from "@/components/ui/banner-carousel";

const awardCategories = [
    {
        icon: Award,
        title: "Best Paper Award",
        description: "Honoring the most outstanding paper, recognized for its originality, technical excellence, and clarity."
    },
    {
        icon: BookOpen,
        title: "Best Poster Award",
        description: "Celebrating the most innovative and effectively presented research poster based on quality and visual impact."
    },
    {
        icon: UserCheck,
        title: "Young Researcher Award",
        description: "Recognizing a brilliant young scientist who has demonstrated exceptional promise and made a significant early-career contribution."
    },
    {
        icon: Lightbulb,
        title: "Innovation in Technology Award",
        description: "Awarded for a groundbreaking technological innovation with the potential for significant real-world impact."
    }
];

export default function AwardsPage() {
    const bannerImages = [
        { src: "https://images.unsplash.com/photo-1578909196432-cbe5205d0491?q=80&w=1600&h=400&auto=format&fit=crop", alt: "Awards Ceremony", hint: "awards ceremony" },
        { src: "https://images.unsplash.com/photo-1639149545952-3023a953d613?q=80&w=800&h=600&auto=format&fit=crop", alt: "Award Trophy", hint: "award trophy" }
    ];
  return (
    <div className="bg-secondary/30">
        <BannerCarousel images={bannerImages}>
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Awards & Recognition
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Cybrix is committed to celebrating excellence in research and innovation. Our awards honor the outstanding contributions of researchers and scholars who are pushing the boundaries of knowledge.
                    </p>
                </CardContent>
            </Card>
        </BannerCarousel>

        <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Celebrating Excellence</div>
                        <h2 className="text-3xl font-bold tracking-tighter">Honoring Groundbreaking Research</h2>
                        <p className="text-muted-foreground text-justify">
                            The Cybrix Awards program is designed to recognize and celebrate the exceptional achievements of individuals and teams whose work demonstrates scientific rigor, innovation, and the potential for significant impact. By acknowledging these contributions, we aim to inspire the next generation of researchers and foster a culture of excellence within the global academic community. Each award is a testament to the dedication and intellectual curiosity that drives scientific progress forward.
                        </p>
                    </div>
                     <div className="relative h-80 md:h-full w-full">
                         <div className="absolute -top-8 -bottom-8 -right-8 w-2/3 bg-primary/10 transform -skew-x-6"></div>
                         <div className="absolute inset-0 p-4">
                             <Image 
                                src="https://images.unsplash.com/photo-1639149545952-3023a953d613?q=80&w=800&h=600&auto=format&fit=crop" 
                                alt="Award Trophy"
                                data-ai-hint="award trophy"
                                fill
                                className="object-cover rounded-lg shadow-2xl" 
                            />
                         </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
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
