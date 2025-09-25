

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import BannerCarousel from "@/components/ui/banner-carousel";

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
        { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&h=400&auto=format=fit=crop", alt: "Library with books", hint: "library books" }
    ];

  return (
    <div className="bg-background">
       <BannerCarousel images={bannerImages}>
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        <span className="text-primary">Cybrix</span> Publications
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Cybrix Journals are peer-reviewed and collaborative journals that strive to publish the most fascinating and dependable source of current information on Arts & Science, Management, Engineering, and Technology.
                    </p>
                </CardContent>
            </Card>
      </BannerCarousel>

      <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <Card className="overflow-hidden shadow-xl border-primary/10">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">Expert Publishing Assistance</h2>
                            <p className="text-muted-foreground text-lg">
                                Cybrix provides help, assistance, and direction in preparation for SCI and SCIE journal publishing. The SCI & SCIE Indexed Journal Search might be exhausting. Get help with SCI and SCIE Indexed journal publishing.
                            </p>
                        </div>
                        <div className="relative min-h-[300px] md:min-h-0">
                            <Image
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&h=400&auto=format=fit=crop"
                                alt="Researchers collaborating"
                                data-ai-hint="research collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Card>
            </div>
      </section>

      <section className="w-full pb-16 md:pb-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-8">
                    <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-destructive/20 border-t-4 border-destructive">
                        <CardHeader>
                            <CardTitle className="text-2xl text-destructive">Plagiarism Policy & Publication Ethics</CardTitle>
                            <CardDescription>Maintaining the integrity of academic research.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {plagiarismPolicies.map((policy, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <policy.icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${policy.iconColor}`} />
                                        <span className="text-muted-foreground">{policy.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 border-t-4 border-primary">
                        <CardHeader>
                            <CardTitle className="text-2xl text-primary">Publication Terms & Conditions</CardTitle>
                            <CardDescription>Guidelines for authors submitting their work.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {termsAndConditions.map((term, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <term.icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${term.iconColor}`} />
                                        <span className="text-muted-foreground">{term.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
      </section>
    </div>
  );
}
