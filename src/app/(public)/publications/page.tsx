
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getJournals, Journal } from "@/services/journalService";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/icons";
import { Metadata } from "next";

// This is a client component, so we can't export metadata directly.
// This metadata would be placed in a parent server component or layout if needed.
const metadata: Metadata = {
  title: "Scholarly & Academic Publications | Cybrix",
  description: "Explore a wide range of peer-reviewed journals and scholarly articles. Cybrix is your gateway to international journal publication and high-impact scientific research papers.",
  keywords: ["scholarly articles", "peer-reviewed journals", "academic publication", "international journal publication", "open access journals", "scientific research papers", "journal indexing", "find academic journals", "browse journals"],
};

export default function PublicationsPage() {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Scholarly & Academic Publications | Cybrix";

    const fetchJournals = async () => {
      setIsLoading(true);
      try {
        const data = await getJournals();
        setJournals(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Could not fetch journals.",
          variant: "destructive",
        });
        console.error("Failed to fetch journals", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJournals();
  }, [toast]);

  const filteredJournals = journals.filter(journal =>
    journal.journalName.toLowerCase().includes(filter.toLowerCase()) ||
    journal.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-background">
        <section className="relative w-full py-20 md:py-32 bg-secondary/50">
             <Image
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1600&h=600&auto=format=fit=crop"
                alt="Library shelf with books for academic publications"
                data-ai-hint="library books"
                fill
                className="object-cover opacity-10"
            />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Explore Our Scholarly Publications
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        Browse our extensive collection of peer-reviewed journals. Find the perfect home for your research or discover the latest advancements in your field of study.
                    </p>
                    <form className="mt-10 flex max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input 
                                placeholder="Search journals by title, or keyword..." 
                                className="pl-12 h-14 w-full rounded-full"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            {isLoading ? (
                <div className="flex items-center justify-center py-24">
                    <Logo className="h-32 w-32" />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredJournals.map(journal => (
                            <Card key={journal.id} className="group flex flex-col text-left overflow-hidden rounded-xl shadow-lg border-transparent transition-all duration-500 hover:shadow-primary/20 hover:border-primary/10 transform hover:-translate-y-2">
                                 <div className="relative w-full h-48 overflow-hidden">
                                    <Image 
                                        src={journal.imageSrc}
                                        alt={`Cover for ${journal.journalName}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        data-ai-hint="journal cover"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow p-6">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-lg font-bold leading-snug h-14 line-clamp-2">{journal.journalName}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 flex-grow pt-2">
                                        <p className="text-sm text-muted-foreground line-clamp-3 h-[60px]">{journal.description}</p>
                                    </CardContent>
                                    <CardFooter className="p-0 pt-6">
                                        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Link href="/publications/digital-library">
                                                Explore Journal <ArrowRight className="ml-2 h-4 w-4 icon-pulse" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>
                    {filteredJournals.length === 0 && !isLoading && (
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
