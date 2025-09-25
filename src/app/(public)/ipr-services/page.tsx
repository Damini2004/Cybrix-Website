import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iprServices = [
    {
        title: "Patent Filing",
        description: "End-to-end assistance with provisional and complete patent applications, both nationally and internationally.",
        href: "/ipr-services/patent",
        imageSrc: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&h=600&auto=format&fit=crop",
        imageHint: "invention patent"
    },
    {
        title: "Trademark Registration",
        description: "Secure your brand and identity with our expert trademark registration and advisory services.",
        href: "/ipr-services/trademark",
        imageSrc: "https://images.unsplash.com/photo-1616594418293-845a78601335?q=80&w=800&h=600&auto=format=fit=crop",
        imageHint: "brand logo"
    },
    {
        title: "Copyright Protection",
        description: "Ensure your creative and academic works are protected from unauthorized use with formal copyright registration.",
        href: "/ipr-services/copyright",
        imageSrc: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&h=600&auto=format=fit=crop",
        imageHint: "creative work"
    }
];

export default function IprServicesPage() {
  return (
    <div className="bg-background">
      <section className="relative h-[500px] w-full flex items-center justify-center p-4 bg-primary/5">
          <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&h=600&auto=format&fit=crop"
              alt="IPR Services"
              data-ai-hint="legal documents"
              fill
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Card className="relative z-20 w-full max-w-3xl bg-transparent border-0 text-center text-white shadow-none">
            <CardContent className="p-8 md:p-12">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2 text-shadow-lg">
                      Intellectual Property Rights
                  </h1>
                  <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 md:text-xl text-shadow">
                      Protecting your novel ideas and research is paramount. We offer comprehensive IPR services to safeguard your innovations and creative works.
                  </p>
            </CardContent>
          </Card>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary/30">
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
                      <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">Why IPR Matters</div>
                      <h2 className="text-3xl font-bold tracking-tighter">Turn Your Ideas into Protected Assets</h2>
                      <p className="text-muted-foreground text-justify">
                          In today's competitive landscape, protecting your intellectual property is not just a legal formality—it's a strategic necessity. Securing patents, trademarks, and copyrights provides you with exclusive rights, deters infringement, and adds significant value to your personal or organizational portfolio. Our expert team is dedicated to helping you navigate the complexities of IPR, ensuring your hard-earned innovations are fully protected.
                      </p>
                      <Button asChild size="lg">
                        <Link href="/contact-us">
                            Consult an IPR Expert <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                  </div>
              </div>
          </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Core IPR Services</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto md:text-xl/relaxed">
                    We offer a specialized range of services to cover all your intellectual property needs.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {iprServices.map((service) => (
                    <Card key={service.title} className="group overflow-hidden rounded-xl shadow-lg border-transparent transition-all duration-500 hover:shadow-primary/20 hover:border-primary/10 transform hover:-translate-y-2">
                         <div className="relative h-56 w-full">
                             <Image 
                                src={service.imageSrc} 
                                alt={service.title} 
                                data-ai-hint={service.imageHint}
                                fill 
                                className="object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                         </div>
                        <CardHeader>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="p-0 text-primary">
                                <Link href={service.href}>
                                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
