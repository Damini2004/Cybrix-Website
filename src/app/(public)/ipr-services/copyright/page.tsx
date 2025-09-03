import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BookCopy, Edit, Shield, FileText, ArrowRight } from "lucide-react";

const copyrightInfo = [
    {
        icon: BookCopy,
        title: "What Can Be Copyrighted?",
        description: "Copyright protects original works of authorship including literary, dramatic, musical, and artistic works, such as poetry, novels, movies, songs, computer software, and architecture."
    },
    {
        icon: Shield,
        title: "Protection & Rights",
        description: "Registration provides a public record of your ownership and is required before you can file an infringement suit in court. It grants you exclusive rights to reproduce, distribute, and display your work."
    },
    {
        icon: FileText,
        title: "Our Filing Service",
        description: "We handle the entire application process, from preparing the forms and submitting the deposit materials to corresponding with the Copyright Office, making the process seamless for you."
    }
];

export default function CopyrightPage() {
    return (
        <div>
             <section className="relative w-full py-20 md:py-32 bg-primary/5 flex items-center justify-center text-center px-4">
                <Image
                    src="https://images.unsplash.com/photo-1611117775522-5a26c0af0968?q=80&w=1600&h=600&auto=format&fit=crop"
                    alt="Copyright Law"
                    data-ai-hint="legal books"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="relative z-10">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Copyright Services
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        We provide expert assistance to ensure your original literary, artistic, and musical works are legally protected from unauthorized use.
                    </p>
                </div>
            </section>
            <section className="w-full py-20 md:py-32 bg-background">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
                         <Image
                            src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=600&h=400&auto=format&fit=crop"
                            width="600"
                            height="400"
                            alt="Copyright Symbol"
                            data-ai-hint="copyright symbol"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover order-last lg:order-first"
                        />
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                 <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Protect Your Creations</div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Secure Your Creative Works
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Safeguard your literary, artistic, and musical creations with formal copyright registration. We provide expert assistance to ensure your original works are legally protected from unauthorized use.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button asChild size="lg">
                                    <a href="/contact-us">
                                        Register Your Copyright <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </section>
            
            <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Understanding Copyright Protection</h2>
                        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                            Learn about the key aspects of securing your intellectual property.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-3">
                        {copyrightInfo.map((item) => (
                            <Card key={item.title} className="text-center flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-2">
                                      <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
