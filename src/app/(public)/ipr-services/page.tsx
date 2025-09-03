import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iprServices = [
    {
        icon: FileText,
        title: "Patent Filing",
        description: "End-to-end assistance with provisional and complete patent applications, both nationally and internationally.",
        href: "/ipr-services/patent"
    },
    {
        icon: Award,
        title: "Trademark Registration",
        description: "Secure your brand and identity with our expert trademark registration and advisory services.",
        href: "/ipr-services/trademark"
    },
    {
        icon: ShieldCheck,
        title: "Copyright Protection",
        description: "Ensure your creative and academic works are protected from unauthorized use with formal copyright registration.",
        href: "/ipr-services/copyright"
    }
];

export default function IprServicesPage() {
  return (
    <div className="bg-secondary/30">
      <section className="relative w-full py-20 md:py-32 bg-primary/5 flex items-center justify-center text-center px-4">
          <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&h=600&auto=format&fit=crop"
              alt="IPR Services"
              data-ai-hint="legal documents"
              fill
              className="object-cover opacity-10"
          />
          <div className="relative z-10">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Intellectual Property Rights Services
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                  Protecting your novel ideas and research is paramount. We offer comprehensive IPR services to safeguard your innovations and creative works.
              </p>
          </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
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
                      <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Why IPR Matters</div>
                      <h2 className="text-3xl font-bold tracking-tighter">Turn Your Ideas into Protected Assets</h2>
                      <p className="text-muted-foreground text-justify">
                          In today's competitive landscape, protecting your intellectual property is not just a legal formality—it's a strategic necessity. Securing patents, trademarks, and copyrights provides you with exclusive rights, deters infringement, and adds significant value to your personal or organizational portfolio. Our expert team is dedicated to helping you navigate the complexities of IPR, ensuring your hard-earned innovations are fully protected.
                      </p>
                      <Button asChild>
                        <Link href="/contact-us">
                            Consult an IPR Expert <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter">Our Core IPR Services</h2>
                <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                    We offer a specialized range of services to cover all your intellectual property needs.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {iprServices.map((service) => (
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
