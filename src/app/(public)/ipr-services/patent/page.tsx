
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileText, Search, Edit, ShieldCheck, ArrowRight } from "lucide-react";

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
        <div className="bg-secondary/30">
            <section className="relative w-full py-20 md:py-32 bg-primary/5 flex items-center justify-center text-center px-4">
                <Image
                    src="https://images.unsplash.com/photo-1518107689113-575aa95c342a?q=80&w=1600&h=600&auto=format&fit=crop"
                    alt="Patent Law"
                    data-ai-hint="legal documents"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Patent Services
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Secure exclusive rights to your inventions with our comprehensive patent services.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Patent Services</h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Secure exclusive rights to your inventions with our comprehensive patent services. From initial search and drafting to filing and prosecution, our experienced team guides you through every step of the complex patenting process to protect your valuable intellectual property.
                        </p>
                        <Button size="lg" className="mt-6">
                            Consult a Patent Expert <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/photo4.png"
                            width={500}
                            height={500}
                            alt="Patent Document"
                            data-ai-hint="patent invention"
                            className="rounded-xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>
            
            <section className="bg-background py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Our Patent Process</h2>
                        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                            We offer end-to-end support to transform your innovative ideas into protected assets.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {patentServices.map((service) => (
                             <Card key={service.title} className="text-center flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-2">
                                      <service.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="mt-2 text-xl">{service.title}</CardTitle>
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
