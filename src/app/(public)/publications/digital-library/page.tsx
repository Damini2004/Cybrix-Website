
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

export default function DigitalLibraryPage() {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

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
        <section className="relative w-full h-[400px] bg-primary/10 flex items-center justify-center text-center px-4">
            <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&h=400&auto=format&fit=crop"
                alt="Digital Library"
                data-ai-hint="library books"
                fill
                className="object-cover opacity-10"
            />
            <div className="relative z-10">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Journal Listing
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    Browse through our extensive collection of journals published with Pure Research Insights.
                </p>
            </div>
        </section>

        <div className="container py-12 md:py-24 px-4 md:px-6">
        <div className="text-center mb-12">
            <div className="relative mt-6 max-w-lg mx-auto">
            <Input 
                placeholder="Search by title, or description..." 
                className="pl-10 h-12"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
        </div>

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
                                            Explore Journal <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </div>
                        </Card>
                    ))}
                </div>
                {filteredJournals.length > 0 && (
                    <div className="mt-12 text-center">
                        <Button size="lg">Load More Publications</Button>
                    </div>
                )}
                {filteredJournals.length === 0 && (
                    <div className="text-center py-16 text-muted-foreground">
                        <p>No journals found matching your search criteria.</p>
                    </div>
                )}
            </>
        )}
        </div>
    </div>
  );
}
