
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getJournals, Journal } from "@/services/journalService";
import { useState, useEffect } from "react";
import { Logo } from "@/components/icons";
import BannerCarousel from "@/components/ui/banner-carousel";

export default function DigitalLibraryPage() {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const bannerImages = [
        { src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&h=400&auto=format=fit=crop", alt: "Digital Library", hint: "library books" },
  ];

  useEffect(() => {
    const fetchJournals = async () => {
      setIsLoading(true);
      try {
        const data = await getJournals();
        setJournals(data);
      } catch (error) {
        console.error("Failed to fetch journals", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJournals();
  }, []);

  const filteredJournals = journals.filter(journal =>
    journal.journalName.toLowerCase().includes(filter.toLowerCase()) ||
    journal.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-secondary/30">
        <BannerCarousel images={bannerImages}>
            <Card className="relative z-20 w-full max-w-3xl bg-background/80 backdrop-blur-sm text-center">
                <CardContent className="p-8 md:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight xl:text-6xl mt-2">
                        Journal Listing
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto text-lg text-foreground/80 md:text-xl">
                        Browse through our extensive collection of journals published with Cybrix.
                    </p>
                </CardContent>
            </Card>
        </BannerCarousel>

        <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
            <Card className="max-w-3xl mx-auto mb-16 shadow-lg border-primary/10">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl">Explore Our Digital Library</CardTitle>
                    <CardDescription>Search our extensive collection of journals by title or keyword.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-grow">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder="Search by title, or description..." 
                                className="pl-10 h-12 w-full"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                        </div>
                        <Button type="submit" size="lg" className="h-12">
                            Search
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {isLoading ? (
                <div className="flex items-center justify-center py-24">
                    <Logo className="h-32 w-32" />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredJournals.map(journal => (
                             <Card key={journal.id} className="group flex flex-col text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-border/50 overflow-hidden">
                                <div className="relative w-full h-48">
                                    <Image 
                                        src={journal.imageSrc}
                                        alt={`Cover for ${journal.journalName}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        data-ai-hint="journal cover"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow p-4">
                                    <CardHeader className="p-0 items-center">
                                        <CardTitle className="text-base font-bold leading-snug h-12 line-clamp-2">{journal.journalName}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex-grow pt-2">
                                        <p className="text-sm text-muted-foreground line-clamp-3 h-16">{journal.description}</p>
                                    </CardContent>
                                    <CardFooter className="p-0 pt-4">
                                        <Button asChild className="w-full">
                                            <Link href="#">
                                                Explore Journal <ArrowRight className="ml-2 h-4 w-4 icon-pulse" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>
                    {filteredJournals.length > 0 && (
                        <div className="mt-12 text-center">
                            <Button size="lg" variant="outline">Load More Publications</Button>
                        </div>
                    )}
                    {filteredJournals.length === 0 && (
                        <div className="text-center py-16 text-muted-foreground">
                            <p>No journals found matching your search criteria.</p>
                        </div>
                    )}
                </>
            )}
        </section>
    </div>
  );
}
