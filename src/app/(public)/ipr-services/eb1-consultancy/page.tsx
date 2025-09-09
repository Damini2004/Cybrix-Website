
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckCircle, ArrowRight, UserCheck, Star, Trophy } from "lucide-react";
import Link from "next/link";

const eb1Criteria = [
    {
        icon: Trophy,
        title: "Extraordinary Ability (EB-1A)",
        description: "For individuals with extraordinary ability in the sciences, arts, education, business, or athletics through sustained national or international acclaim."
    },
    {
        icon: UserCheck,
        title: "Outstanding Professors and Researchers (EB-1B)",
        description: "For outstanding professors and researchers with at least three years of experience in teaching or research in a particular academic area."
    },
    {
        icon: Star,
        title: "Multinational Manager or Executive (EB-1C)",
        description: "For certain multinational executives and managers who have been employed for at least one of the three preceding years by the overseas affiliate, parent, subsidiary, or branch of the U.S. employer."
    }
];

export default function EB1ConsultancyPage() {
    return (
        <div className="bg-secondary/30">
            <section className="relative w-full py-20 md:py-32 bg-primary/5 flex items-center justify-center text-center px-4">
                <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&h=600&auto=format&fit=crop"
                    alt="EB1 Consultancy"
                    data-ai-hint="business meeting"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        EB-1 Visa Consultancy
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Expert guidance for individuals of extraordinary ability seeking to achieve their American dream. We specialize in preparing and filing petitions for the EB-1 visa category.
                    </p>
                </div>
            </section>

            <section className="w-full py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&h=600&auto=format&fit=crop"
                                alt="Innovation"
                                data-ai-hint="team innovation"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Your Pathway to a Green Card</div>
                            <h2 className="text-3xl font-bold tracking-tighter">Navigate the EB-1 Visa with Confidence</h2>
                            <p className="text-muted-foreground text-justify">
                                The EB-1 visa is a prestigious category for professionals at the very top of their field. The application process is rigorous and requires meticulous documentation of your achievements. Our experienced consultants provide personalized support to build a compelling case that highlights your extraordinary abilities and meets the stringent USCIS criteria.
                            </p>
                            <Button asChild>
                                <Link href="/contact-us">
                                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter">EB-1 Visa Categories We Serve</h2>
                        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                            We provide specialized assistance for all subcategories of the EB-1 visa.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {eb1Criteria.map((service) => (
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
