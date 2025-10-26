import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BookCopy, Shield, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

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
        <div className="bg-background">
             <section className="relative h-[500px] w-full flex items-center justify-center p-4">
                <Image
                    src="https://picsum.photos/seed/copyright1/1600/500"
                    alt="Copyright Law"
                    data-ai-hint="legal books"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Card className="relative z-20 w-full max-w-3xl bg-transparent border-0 text-center text-white shadow-none">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2 text-shadow-lg">
                            Copyright Services
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 md:text-xl text-shadow">
                            We provide expert assistance to ensure your original literary, artistic, and musical works are legally protected from unauthorized use.
                        </p>
                    </CardContent>
                </Card>
            </section>
            <section className="relative w-full overflow-hidden bg-background py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6 text-center md:text-left">
                            <BookCopy className="mx-auto md:mx-0 h-12 w-12 text-primary" />
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Secure Your Creative Works</h2>
                             <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Safeguard your literary, artistic, and musical creations with formal copyright registration. We provide expert assistance to ensure your original works are legally protected from unauthorized use.
                            </p>
                             <Button asChild size="lg">
                                <Link href="/contact-us">
                                    Register Your Copyright <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                        <div className="relative h-80 md:h-full w-full">
                             <div className="absolute -top-8 -bottom-8 -right-8 w-2/3 bg-primary/10 transform -skew-x-6"></div>
                             <div className="absolute inset-0 p-4">
                                 <Image 
                                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=600&h=400&auto=format&fit=crop" 
                                    alt="Copyright Symbol"
                                    data-ai-hint="copyright symbol"
                                    fill
                                    className="object-cover rounded-lg shadow-2xl" 
                                />
                             </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="w-full py-12 md:py-24 bg-secondary/30">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Understanding Copyright Protection</h2>
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto md:text-xl/relaxed">
                            Learn about the key aspects of securing your intellectual property.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-3">
                        {copyrightInfo.map((item) => (
                            <Card key={item.title} className="text-center p-6 border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                                 <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                                      <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                <CardHeader className="p-0">
                                    <CardTitle className="mt-2 text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow mt-2 p-0">
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
