import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Shield, BookCopy } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BannerCarousel from "@/components/ui/banner-carousel";
import { BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Research Publication Policies & Ethics | Cybrix",
    description: "Understand our publication ethics, plagiarism policy, and terms for submitting scholarly articles. Learn about our commitment to peer-reviewed journals and academic integrity.",
    keywords: ["publication support services", "plagiarism policy", "academic integrity", "peer-review process", "scholarly articles", "publication ethics", "journal submission guidelines", "research manuscript preparation", "how to avoid plagiarism in research paper"],
};

const plagiarismPolicies = [
    { text: "Plagiarized articles will be rejected (Must be 20% below including references).", icon: AlertTriangle, iconColor: "text-destructive" },
    { text: "Copying of contents from other articles is strictly prohibited.", icon: AlertTriangle, iconColor: "text-destructive" },
    { text: "Only articles with 80% original content should be submitted with the expectation of being accepted for our conferences and journals.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "Cybrix keenly discourages plagiarism in research articles, proposals and thesis submitted to us.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "All articles submitted to Cybrix Conferences and Publications first undergo a plagiarism check before being sent to our editorial board for review.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "Articles failing plagiarism check will be subjected to rejection.", icon: AlertTriangle, iconColor: "text-destructive" },
];

const termsAndConditions = [
    { text: "Note that plagiarized articles will be rejected (Must be 20% below including references).", icon: AlertTriangle, iconColor: "text-destructive" },
    { text: "Copying of contents from other articles is strictly prohibited.", icon: AlertTriangle, iconColor: "text-destructive" },
    { text: "Review reports have to be answered by the author accurately. Malpractice will not be tolerated.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "The Publisher reserves the right to require payment before publishing.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "Payment is due upon receipt of invoices.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "All bank charges are payable by the customer.", icon: CheckCircle, iconColor: "text-green-500" },
    { text: "Any Plagiarism, Poor Figures, Flawed Science, and Uneven quality may lead to the rejection of the paper.", icon: AlertTriangle, iconColor: "text-destructive" },
]

export default function PublicationsOverviewPage() {
    const bannerImages = [
        { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&h=400&auto=format&fit=crop", alt: "Library with books for academic publication", hint: "library books" }
    ];

  return (
    <div className="bg-background">
       <BannerCarousel images={bannerImages}>
            <Card className="relative z-20 w-full max-w-3xl bg-background/60 backdrop-blur-md text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        <span className="text-primary">Cybrix</span> Publications
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Cybrix Journals are peer-reviewed, open access journals that strive to publish the most fascinating and dependable source of current information on Arts & Science, Management, Engineering, and Technology.
                    </p>
                </CardContent>
            </Card>
      </BannerCarousel>

      <section className="relative w-full overflow-hidden bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <BookOpen className="mx-auto md:mx-0 h-12 w-12 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight text-primary">
                Expert Publishing Assistance
              </h2>
              <p className="max-w-xl mx-auto md:mx-0 text-lg text-foreground/80 md:text-xl">
                Cybrix provides comprehensive publication support services, offering help, assistance, and direction in preparation for SCI and SCIE journal publishing. The SCI & SCIE Indexed Journal Search can be exhausting; let us help you with your international journal publication.
              </p>
            </div>
            <div className="relative h-80 md:h-full w-full">
              <div className="absolute -top-8 -bottom-8 -right-8 w-2/3 bg-primary/10 transform -skew-x-6"></div>
              <div className="absolute inset-0 p-4">
                <Image
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&h=400&auto=format&fit=crop"
                  alt="Researchers collaborating on a scientific research paper"
                  data-ai-hint="research collaboration"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <Card className="max-w-4xl mx-auto shadow-2xl border-primary/10">
                 <Tabs defaultValue="policy" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 h-16 rounded-t-lg rounded-b-none">
                        <TabsTrigger value="policy" className="h-full text-lg gap-2 data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive data-[state=active]:shadow-none">
                            <Shield className="h-5 w-5" /> Plagiarism Policy
                        </TabsTrigger>
                        <TabsTrigger value="terms" className="h-full text-lg gap-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-none">
                            <BookCopy className="h-5 w-5" /> Publication T&Cs
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="policy" className="p-6 md:p-8">
                         <CardHeader className="p-0 mb-6 text-center">
                            <CardTitle className="text-2xl text-destructive">Publication Ethics & Plagiarism</CardTitle>
                            <CardDescription>Maintaining integrity in scholarly articles and academic writing.</CardDescription>
                        </CardHeader>
                        <ul className="space-y-4">
                            {plagiarismPolicies.map((policy, index) => (
                                <li key={index} className="flex items-start gap-4 p-3 rounded-lg border-l-4" style={{ borderLeftColor: policy.iconColor.includes('destructive') ? 'hsl(var(--destructive))' : 'hsl(var(--primary))' }}>
                                    <policy.icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${policy.iconColor}`} />
                                    <span className="text-muted-foreground">{policy.text}</span>
                                </li>
                            ))}
                        </ul>
                    </TabsContent>
                    <TabsContent value="terms" className="p-6 md:p-8">
                         <CardHeader className="p-0 mb-6 text-center">
                            <CardTitle className="text-2xl text-primary">Terms & Conditions for Publication</CardTitle>
                            <CardDescription>Guidelines for authors submitting their research for journal publication.</CardDescription>
                        </CardHeader>
                         <ul className="space-y-4">
                            {termsAndConditions.map((term, index) => (
                                <li key={index} className="flex items-start gap-4 p-3 rounded-lg border-l-4" style={{ borderLeftColor: term.iconColor.includes('destructive') ? 'hsl(var(--destructive))' : 'hsl(var(--primary))' }}>
                                    <term.icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${term.iconColor}`} />
                                    <span className="text-muted-foreground">{term.text}</span>
                                </li>
                            ))}
                        </ul>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
      </section>
    </div>
  );
}
