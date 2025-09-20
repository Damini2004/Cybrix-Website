

import JournalSubmissionForm from "@/components/forms/journal-submission-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Globe, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const submissionBenefits = [
    {
        icon: Globe,
        title: "Maximize Your Impact",
        description: "Publish in prestigious, high-impact journals indexed in Scopus and Web of Science. We ensure your research reaches a global audience of innovators and thought leaders."
    },
    {
        icon: Users,
        title: "Expert End-to-End Support",
        description: "From manuscript preparation and journal selection to navigating the complexities of peer review, our expert team provides dedicated support at every stage of your publication journey."
    },
    {
        icon: ShieldCheck,
        title: "Commitment to Quality",
        description: "Your submission will be evaluated by experts in your field through a rigorous, transparent peer-review process, upholding the highest standards of academic integrity."
    }
]

export default function SubmitJournalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
          <Image
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&h=400&auto=format&fit=crop"
              alt="Researcher writing"
              data-ai-hint="research writing"
              fill
              className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="container px-4 md:px-6 z-20 relative text-center text-white">
              <div className="mx-auto max-w-3xl">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                    Submit Your Manuscript
                </h1>
                <p className="mt-6 max-w-xl mx-auto text-lg text-white/90 md:text-xl">
                    Join a global community of researchers. Share your work, get valuable feedback, and make an impact on your field.
                </p>
                <Button size="lg" className="mt-8" asChild>
                    <a href="#submission-form">
                        Start Your Submission <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
              </div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter">Why Submit with Cybrix?</h2>
                  <p className="max-w-[700px] mx-auto text-muted-foreground mt-2">
                      We provide the tools and support you need to publish successfully.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {submissionBenefits.map((benefit, index) => (
                      <Card key={index} className="text-center bg-background transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <CardHeader className="items-center">
                              <div className="p-4 bg-primary/10 rounded-full w-fit">
                                  <benefit.icon className="h-8 w-8 text-primary" />
                              </div>
                              <CardTitle className="mt-4">{benefit.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{benefit.description}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Form Section */}
      <section id="submission-form" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
              <Card className="max-w-4xl mx-auto shadow-xl border-primary/10 overflow-hidden">
                  <JournalSubmissionForm />
              </Card>
          </div>
      </section>
    </>
  );
}
