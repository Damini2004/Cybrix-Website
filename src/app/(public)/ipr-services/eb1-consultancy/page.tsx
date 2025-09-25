
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, UserCheck, Star, Trophy } from "lucide-react";
import Link from "next/link";

const eb1Criteria = [
    {
        icon: Trophy,
        title: "Extraordinary Ability (EB-1A)",
        description: "For individuals with extraordinary ability in the sciences, arts, education, business, or athletics through sustained national or international acclaim."
    },
    {
        icon: UserCheck,
        title: "Outstanding Professors & Researchers (EB-1B)",
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
        <div className="bg-background">
            <section className="relative h-[500px] w-full flex items-center justify-center p-4">
                <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&h=600&auto=format=fit=crop"
                    alt="EB1 Consultancy"
                    data-ai-hint="business meeting"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Card className="relative z-20 w-full max-w-3xl bg-transparent border-0 text-white text-center shadow-none">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2 text-shadow-lg">
                            EB-1 Visa Consultancy
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 md:text-xl text-shadow">
                            Expert guidance for individuals of extraordinary ability seeking to achieve their American dream. We specialize in preparing and filing petitions for the EB-1 visa category.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section className="w-full py-16 md:py-24">
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
                            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Your Pathway to a Green Card</div>
                            <h2 className="text-3xl font-bold tracking-tighter">Navigate the EB-1 Visa with Confidence</h2>
                            <p className="text-muted-foreground text-justify md:text-xl">
                                The EB-1 visa is a prestigious category for professionals at the very top of their field. The application process is rigorous and requires meticulous documentation of your achievements. Our experienced consultants provide personalized support to build a compelling case that highlights your extraordinary abilities and meets the stringent USCIS criteria.
                            </p>
                            <Button asChild size="lg">
                                <Link href="/contact-us">
                                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">EB-1 Visa Categories We Serve</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto md:text-xl/relaxed">
                            We provide specialized assistance for all subcategories of the EB-1 visa.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {eb1Criteria.map((service) => (
                            <Card key={service.title} className="text-center p-6 border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                                    <service.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardHeader className="p-0">
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow mt-2 p-0">
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
