
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FileText, Users, BookUp, Sparkles, ArrowRight } from "lucide-react";

const supportInfo = [
    {
        icon: FileText,
        title: "What to Submit",
        description: "Researchers are encouraged to submit an abstract that addresses scientific questions, details engineering research observations, or contains primary scientific data."
    },
    {
        icon: Users,
        title: "Peer Review Process",
        description: "Abstracts are peer-reviewed by the Conferences Editorial Committee and will be considered for either oral or poster presentation."
    },
    {
        icon: BookUp,
        title: "Publication of Abstracts",
        description: "All accepted abstracts are published in the Conference Proceedings, which serves as an online supplement to our Journals."
    },
    {
        icon: Sparkles,
        title: "Unique Meeting Themes",
        description: "Each meeting, conference, and workshop is unique in the specific types of engineering & technology-related research that are eligible for submission."
    }
]

export default function JournalSupportPage() {
  return (
    <div className="bg-secondary/50">
        <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
            <Image
                src="/journal-support.png"
                alt="Journal Support"
                data-ai-hint="researcher writing"
                fill
                className="object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="container px-4 md:px-6 z-20 relative text-center text-white">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Journal Publication Support
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-white/90 md:text-xl">
                        Navigating the path to publication with expert guidance and dedicated support.
                    </p>
                </div>
            </div>
        </section>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl">
             <Image 
                src="https://topazconsultancy.in/images/consultancy.jpg"
                alt="Scientist in a lab"
                data-ai-hint="researcher scientist"
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
          <div className="space-y-6">
            <div className="bg-primary/10 text-primary inline-block rounded-full px-4 py-1 font-semibold text-sm">
                Journal Publication Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Abstract Submission Guidelines</h1>
            <p className="text-lg text-muted-foreground">
                Cybrix’s Conferences, Meetings, Summits, and Workshops offer vibrant scientific programs with the opportunity for attendees to submit and present their groundbreaking data.
            </p>
            <Button size="lg" asChild>
                <a href="/submit-journal">
                    Submit Your Abstract Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </Button>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Key Information for Authors</h2>
                <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                    Understand the journey of your abstract from submission to publication. Here’s what you need to know.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportInfo.map((item, index) => (
                    <Card key={index} className="bg-background/80 backdrop-blur-sm border-primary/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                        <CardHeader className="items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-3">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-center text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
