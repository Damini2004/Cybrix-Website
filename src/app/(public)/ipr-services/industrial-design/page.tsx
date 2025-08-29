
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Gem, Palette, ShieldCheck, ArrowRight, Lightbulb, Bot } from "lucide-react";

const protectionInfo = [
    {
        icon: Palette,
        title: "What is Protected?",
        description: "A design can consist of three-dimensional features, such as the shape of an article, or two-dimensional features, such as patterns, lines or color. It protects the visual appeal, not the functional aspects."
    },
    {
        icon: ShieldCheck,
        title: "Why Register?",
        description: "Registration provides you with the exclusive right to prevent others from making, selling, or importing articles bearing a design which is a copy, or substantially a copy, of the protected design."
    },
    {
        icon: Lightbulb,
        title: "Our Expertise",
        description: "We navigate the complexities of the application process, ensuring your design is accurately represented and filed correctly to secure robust protection for your creative work."
    }
];

export default function IndustrialDesignPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative w-full h-[450px] bg-primary/5 flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1596009110515-9a427501b1c2?q=80&w=1600&h=450&auto=format&fit=crop"
                        alt="Abstract design shapes"
                        data-ai-hint="abstract design"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="relative z-10 container mx-auto">
                    <div className="p-4 bg-primary/10 rounded-full inline-flex mb-6">
                        <Gem className="h-10 w-10 text-primary" />
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Industrial Design Rights
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Protect the unique visual appearance of your products. An industrial design constitutes the ornamental or aesthetic aspect of an article.
                    </p>
                </div>
            </section>
            
            {/* Main Content Section */}
            <section className="w-full py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                         <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                            <Image 
                                src="/photo6.webp"
                                alt="Stylish product design"
                                data-ai-hint="product design"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                             <h2 className="text-3xl font-bold tracking-tight">From Concept to Protection</h2>
                             <p className="text-muted-foreground text-lg">
                                Your product's design is a valuable asset that distinguishes it in the marketplace. Securing industrial design rights protects your investment in creativity and prevents unauthorized imitation, giving you a competitive edge.
                             </p>
                             <Button size="lg" asChild>
                                <a href="/contact-us">
                                    File Your Design Application <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
             <section className="w-full py-16 md:py-24 bg-secondary">
                <div className="container px-4 md:px-6">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight">Understanding Design Protection</h2>
                        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                           Learn about the key aspects of securing your industrial design rights.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {protectionInfo.map((item, index) => (
                            <Card key={index} className="text-center bg-background transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-3">
                                        <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
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
