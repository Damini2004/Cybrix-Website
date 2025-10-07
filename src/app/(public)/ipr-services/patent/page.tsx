
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileText, Search, Edit, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const patentServices = [
    {
        icon: Search,
        title: "Patentability Search",
        description: "Conducting thorough prior art searches to assess the novelty and non-obviousness of your invention."
    },
    {
        icon: Edit,
        title: "Patent Drafting",
        description: "Preparing a detailed and robust patent application that meets all statutory requirements."
    },
    {
        icon: FileText,
        title: "Filing & Prosecution",
        description: "Managing the entire filing process and responding to office actions from the patent office."
    },
    {
        icon: ShieldCheck,
        title: "Maintenance & Litigation",
        description: "Assisting with annuity payments to maintain your patent and providing support for infringement cases."
    }
];

export default function PatentPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[500px] w-full flex items-center justify-center p-4">
                <Image
                    src="/patent-services.png"
                    alt="Patent Law"
                    data-ai-hint="legal documents"
                    fill
                    className="object-cover opacity-20"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                <Card className="relative z-20 w-full max-w-3xl bg-transparent border-0 text-center shadow-none">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2 text-shadow-lg">
                            Patent Services
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl text-shadow">
                           Secure exclusive rights to your inventions with our comprehensive patent services.
                        </p>
                    </CardContent>
                </Card>
            </section>

            <section className="w-full py-16 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="relative grid md:grid-cols-2 gap-12 items-center">
                        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 -z-10" />
                        <div className="flex justify-center">
                            <Image
                                src="/photo4.png"
                                width={500}
                                height={500}
                                alt="Patent Document"
                                data-ai-hint="patent invention"
                                className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="space-y-6">
                            <Card className="bg-secondary/10 border-primary/20 shadow-lg p-8">
                                <h2 className="text-3xl font-bold tracking-tight">Protect Your Inventions</h2>
                                <p className="mt-6 text-lg text-muted-foreground">
                                    From initial search and drafting to filing and prosecution, our experienced team guides you through every step of the complex patenting process to protect your valuable intellectual property.
                                </p>
                                <Button size="lg" asChild className="mt-6">
                                    <Link href="/contact-us">
                                        Consult a Patent Expert <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-secondary/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Patent Process</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto md:text-xl/relaxed">
                            We offer end-to-end support to transform your innovative ideas into protected assets.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {patentServices.map((service) => (
                             <Card key={service.title} className="text-center flex flex-col items-center p-6 bg-background border-border/50 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
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
