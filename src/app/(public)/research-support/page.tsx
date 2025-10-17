
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, FileText, BarChart, Search, Palette, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const supportServices = [
  {
    icon: FileText,
    title: "Manuscript Editing & Formatting",
    description: "Our expert editors will refine your manuscript for clarity, grammar, and style, ensuring it meets the specific formatting requirements of your target journal."
  },
  {
    icon: BarChart,
    title: "Statistical Analysis & Consultation",
    description: "Get expert help with your data. We offer statistical analysis, data visualization, and consultation to ensure your results are robust and clearly presented."
  },
  {
    icon: Search,
    title: "Plagiarism Checking",
    description: "We provide comprehensive plagiarism checks using industry-leading software to ensure the originality of your work before submission."
  },
  {
    icon: Palette,
    title: "Graphical Abstract & Figure Design",
    description: "Enhance the visual appeal and impact of your research with professionally designed graphical abstracts, figures, and charts."
  },
  {
    icon: ArrowRight,
    title: "Journal Selection Assistance",
    description: "Navigating the vast number of journals can be daunting. We help you identify the most suitable journals for your manuscript based on scope, impact, and audience."
  }
];

export default function ResearchSupportPage() {
  return (
    <div className="bg-secondary/30">
        <section className="relative h-[500px] w-full flex items-center justify-center p-4">
            <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&h=400&auto=format&fit=crop"
                alt="Research Support"
                data-ai-hint="team collaboration"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Card className="relative z-20 w-full max-w-3xl bg-background/60 backdrop-blur-md text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Research Support Services
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        From manuscript preparation to post-publication, we provide comprehensive support to help you achieve your research goals.
                    </p>
                </CardContent>
            </Card>
        </section>

        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                         <Image
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&h=600&auto=format&fit=crop"
                            alt="Research collaboration"
                            data-ai-hint="team meeting"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                         <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Your Research Partner</div>
                        <h2 className="text-3xl font-bold tracking-tighter">Navigating the Path to Publication</h2>
                        <p className="text-muted-foreground text-justify">
                            The journey from research idea to published paper is complex. At Cybrix, we offer a suite of specialized support services designed to assist you at every stage. Our team of experienced editors, statisticians, and publication experts is dedicated to helping you produce high-quality, impactful research and navigate the submission process with confidence.
                        </p>
                         <Button asChild>
                            <Link href="/contact-us">
                                Get Support Today <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter">Our Support Services</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        We offer a range of services to help you produce high-quality research and increase your chances of publication.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {supportServices.map((service, index) => (
                    <Card key={index} className="text-center flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-primary/10">
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
