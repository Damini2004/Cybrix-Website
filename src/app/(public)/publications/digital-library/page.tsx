
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
    <div className="container py-12 md:py-24 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Journal Listing</h1>
        <p className="mt-4 text-lg text-muted-foreground">Browse through our extensive collection of journals published with Pure Research Insights.</p>
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
                    <Card key={journal.id} className="group flex flex-col text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border-border/50">
                        <CardHeader className="items-center pt-8">
                             <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white group-hover:border-primary/20 transition-colors duration-300">
                                <Image 
                                    src={journal.imageSrc}
                                    alt={`Cover for ${journal.journalName}`}
                                    fill
                                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 15vw"
                                    data-ai-hint="journal cover"
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle className="text-base font-bold leading-snug h-12 line-clamp-2">{journal.journalName}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-sm text-muted-foreground line-clamp-3 h-16">{journal.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href="#">
                                    Explore Journal <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
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
  );
}
