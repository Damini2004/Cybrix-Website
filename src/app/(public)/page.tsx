
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookCheck, BrainCircuit, Microscope, ShieldCheck, Database, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getJournals, Journal } from "@/services/journalService";

const indexedJournalCategories = [
  {
    title: "Web of Science (WoS) Indexed Journals",
    description: "Featuring top-tier journals from SCIE, SSCI, and AHCI for maximum impact and citation.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "science research",
  },
  {
    title: "PubMed / MEDLINE Indexed Journals",
    description: "Crucial for researchers in the life sciences and biomedical fields for widespread visibility.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "medical biology",
  },
  {
    title: "IEEE Xplore Indexed Journals",
    description: "Access to the most cited publications in engineering, computer science, and technology.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "engineering technology",
  },
  {
    title: "UGC Care / Peer Review Journals",
    description: "Quality, peer-reviewed journals recognized for academic excellence and integrity.",
    imageSrc: "https://placehold.co/600x400.png",
    imageHint: "academic books",
  },
];

function IndexedJournalsSection() {
  return (
    <section id="highlights" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm font-medium">Indexed Journals</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Publish in High-Impact Journals</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive support for publishing in a wide range of prestigious, indexed journals.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {indexedJournalCategories.map(category => (
            <Card key={category.title} className="group overflow-hidden rounded-xl flex flex-col hover:shadow-lg transition-shadow bg-background/50 hover:border-primary/20">
              <div className="relative h-40 w-full">
                  <Image
                      src={category.imageSrc}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={category.imageHint}
                  />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-lg mb-2">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground flex-grow">{category.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background z-0"></div>
          <div className="container px-4 md:px-6 z-10 relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-7xl">
                    <span className="block">Streamline Your Research</span>
                    <span className="block text-primary">Pure Research Insights</span>
                  </h1>
                  <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                  Our solutions empower researchers and businesses to save time, gain deeper understanding, and move forward with confidence. </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/submit-journal">
                    <Button size="lg" className="w-full sm:w-auto">
                      Submit Your Paper
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative group">
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400&auto=format&fit=crop"
                  width="600"
                  height="400"
                  alt="Hero"
                  data-ai-hint="research academic"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last relative"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Accelerate Your Publication Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pure Research Insights provides a comprehensive suite of tools to support researchers, editors, and publishers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <Card className="group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-transparent hover:border-primary/30">
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 w-fit">
                    <BrainCircuit className="h-10 w-10 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="mt-4 text-xl">AI-Powered Tagging</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Our intelligent system automatically suggests relevant tags for your submissions, improving discoverability and matching with reviewers.</p>
                </CardContent>
              </Card>
              <Card className="group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-transparent hover:border-primary/30">
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 w-fit">
                     <BookCheck className="h-10 w-10 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Efficient Submission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">A user-friendly form and dashboard for authors to submit and track their manuscripts with ease.</p>
                </CardContent>
              </Card>
              <Card className="group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border-transparent hover:border-primary/30">
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-primary/10 w-fit">
                     <Microscope className="h-10 w-10 text-primary transition-transform duration-300 group-hover:rotate-6" />
                  </div>
                  <CardTitle className="mt-4 text-xl">Robust Admin Tools</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">Multi-level admin roles for verifying submissions, managing users, and overseeing the entire publication process.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <IndexedJournalsSection />

        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Associations & Partners</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are proud to collaborate with leading institutions and organizations in the academic community.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-y-12 gap-x-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <Image src="https://logodix.com/logo/2038481.png" width={150} height={60} alt="Partner Logo 1" data-ai-hint="logo company" className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
              <Image src="https://logodix.com/logo/1993463.png" width={150} height={60} alt="Partner Logo 2" data-ai-hint="logo brand" className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
              <Image src="https://logodix.com/logo/1712867.png" width={150} height={60} alt="Partner Logo 3" data-ai-hint="logo business" className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
              <Image src="https://logodix.com/logo/1101923.png" width={150} height={60} alt="Partner Logo 4" data-ai-hint="logo tech" className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
              <Image src="https://logodix.com/logo/647339.png" width={150} height={60} alt="Partner Logo 5" data-ai-hint="logo education" className="opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
