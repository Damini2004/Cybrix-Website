import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search, Edit, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TrademarkPage() {
    return (
        <div className="bg-background">
            <section className="relative h-[500px] w-full flex items-center justify-center p-4">
                <Image
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1600&h=600&auto=format&fit=crop"
                    alt="Trademark Registration"
                    data-ai-hint="legal brand"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Card className="relative z-20 w-full max-w-3xl bg-transparent border-0 text-white text-center shadow-none">
                    <CardContent className="p-8 md:p-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2 text-shadow-lg">
                            Trademark Registration
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 md:text-xl text-shadow">
                            Secure your brand identity. A trademark protects your brand names, logos, and slogans, distinguishing your goods and services from the competition.
                        </p>
                    </CardContent>
                </Card>
            </section>
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                        <Image src="/photo5.jpg" alt="Trademark" data-ai-hint="brand logo" layout="fill" objectFit="cover" />
                    </div>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight">Why Register a Trademark?</h2>
                        <ul className="space-y-6 text-muted-foreground">
                            <li className="flex items-start gap-4">
                                <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-lg">Nationwide Priority</h4>
                                    <p>Establishes your rights to use the mark nationwide for your specific goods or services.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-lg">Legal Presumption of Ownership</h4>
                                    <p>A registered trademark serves as legal evidence of your ownership and exclusive rights.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-foreground text-lg">Deters Others</h4>
                                    <p>Discourages others from using confusingly similar marks and makes it easier to stop them if they do.</p>
                                </div>
                            </li>
                        </ul>
                        <Button asChild size="lg">
                            <Link href="/contact-us">
                                Start Your Application <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className="text-center mt-24 mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Trademark Services</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto md:text-xl/relaxed">
                        We provide a full suite of services to protect and enforce your brand.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="text-center p-6 border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                        <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                            <Search className="h-8 w-8 text-primary"/>
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle>Clearance Search</CardTitle>
                        </CardHeader>
                        <CardContent className="mt-2 p-0">
                            <p className="text-muted-foreground">We conduct comprehensive searches to ensure your desired mark is available for use and registration.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                         <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                            <Edit className="h-8 w-8 text-primary"/>
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle>Application Filing</CardTitle>
                        </CardHeader>
                        <CardContent className="mt-2 p-0">
                            <p className="text-muted-foreground">Our experts prepare and file your trademark application with the appropriate national office to maximize success.</p>
                        </CardContent>
                    </Card>
                    <Card className="text-center p-6 border-0 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                         <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                            <ShieldCheck className="h-8 w-8 text-primary"/>
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle>Monitoring & Enforcement</CardTitle>
                        </CardHeader>
                        <CardContent className="mt-2 p-0">
                            <p className="text-muted-foreground">We offer services to monitor for infringing marks and can assist with enforcement actions to protect your brand.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    )
}
