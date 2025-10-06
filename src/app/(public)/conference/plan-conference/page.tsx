
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, CalendarCheck, Megaphone, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const planningServices = [
    {
        icon: CalendarCheck,
        title: "Full-Scale Event Management",
        description: "From concept to completion, we manage all logistics—venue, scheduling, and on-site coordination—for a flawless event."
    },
    {
        icon: Megaphone,
        title: "Targeted Marketing & Promotion",
        description: "Our team creates and runs strategic promotional campaigns to draw in a varied and captivated audience of speakers and attendees."
    },
    {
        icon: Users,
        title: "Speaker & Sponsor Management",
        description: "We handle all communications and logistics for keynote speakers, presenters, and sponsors to build valuable event partnerships."
    },
    {
        icon: BookOpen,
        title: "Publication & Proceedings",
        description: "We manage the entire publication journey for your proceedings, from peer review and formatting, to indexing in top academic databases."
    }
];

export default function PlanConferencePage() {
  return (
    <div className="bg-secondary/30">
        <section className="relative h-[500px] w-full flex items-center justify-center p-4">
            <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&h=400&auto=format=fit=crop"
                alt="Conference planning session"
                data-ai-hint="team meeting"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Partner with Us on Your Next Conference
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Collaborate with our experienced team to organize a successful and impactful scientific event. We provide end-to-end support to bring your vision to life.
                    </p>
                </CardContent>
            </Card>
        </section>
        
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                         <Image
                            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&h=600&auto=format=fit=crop"
                            alt="Collaboration"
                            data-ai-hint="team collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                         <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-white">A Partnership for Success</div>
                        <h2 className="text-3xl font-bold tracking-tighter text-black">Your Vision, Our Expertise</h2>
                        <p className="text-muted-foreground text-justify">
                            Planning a scientific conference requires meticulous attention to detail and a deep understanding of the academic landscape. By partnering with Cybrix, you gain access to a dedicated team of professionals who are committed to making your event a resounding success. We work closely with you to understand your goals, develop a comprehensive strategy, and execute every aspect of the conference with precision and care.
                        </p>
                         <Button asChild>
                            <Link href="/contact-us">
                                Inquire About Partnership <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter">Comprehensive Conference Solutions</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        Our complete range of services covers every aspect of your conference, ensuring a successful and stress-free event.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {planningServices.map((service) => (
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
