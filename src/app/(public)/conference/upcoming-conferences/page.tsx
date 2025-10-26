
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState, useCallback, useMemo } from "react";
import { getConferences } from "@/services/conferenceService";
import type { Conference } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Search as SearchIcon, Eye } from "lucide-react";
import { getCurrentDateInIndia } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ConferenceSidebarForm from "@/components/forms/conference-sidebar-form";
import { countries } from "@/lib/countries";


const months = [
    { name: "January", value: 0 }, { name: "February", value: 1 }, { name: "March", value: 2 },
    { name: "April", value: 3 }, { name: "May", value: 4 }, { name: "June", value: 5 },
    { name: "July", value: 6 }, { name: "August", value: 7 }, { name: "September", value: 8 },
    { name: "October", value: 9 }, { name: "November", value: 10 }, { name: "December", value: 11 }
];


export default function UpcomingConferencesPage() {
  const [allConferences, setAllConferences] = useState<Conference[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

   useEffect(() => {
    setCurrentDate(getCurrentDateInIndia());
  }, []);

  const fetchConferences = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getConferences();
      setAllConferences(data);
    } catch (error) {
      console.error("Error fetching conferences:", error);
      toast({
        title: "Error",
        description: "Could not fetch conferences.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchConferences();
  }, [fetchConferences]);
  
  const { upcomingConferences } = useMemo(() => {
    if (!currentDate) return { upcomingConferences: [] };
    
    const upcoming = allConferences
      .filter(conf => conf.dateObject && conf.dateObject.getTime() >= currentDate.getTime())
      .sort((a, b) => a.dateObject.getTime() - b.dateObject.getTime());

    return { 
        upcomingConferences: upcoming, 
    };
  }, [allConferences, currentDate]);


  const totalPages = Math.ceil(upcomingConferences.length / rowsPerPage);
  const paginatedConferences = upcomingConferences.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-secondary/30">
        
         <section className="relative w-full py-16 md:py-20 bg-gray-800 text-white overflow-hidden">
            <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
                alt="Conference background"
                fill
                className="object-cover opacity-20"
                data-ai-hint="conference audience"
            />
            <div className="relative z-10 container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tight text-center mb-10">
                    Upcoming International <span className="text-amber-400">Conference 2025</span>
                </h2>
                {isLoading ? (
                    <div className="flex justify-center"><Skeleton className="h-64 w-full max-w-4xl" /></div>
                ) : upcomingConferences.length > 0 && (
                    <Carousel
                        opts={{ align: "start", loop: true }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {upcomingConferences.slice(0, 6).map((conference) => (
                                <CarouselItem key={conference.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="flex flex-col h-full bg-white text-black text-center p-6 shadow-lg transform transition-all hover:-translate-y-2">
                                            <div className="flex-grow space-y-3">
                                                <Image src={conference.imageSrc || 'https://placehold.co/100x100.png'} alt={conference.shortTitle} width={100} height={100} className="w-24 h-24 object-contain mx-auto" data-ai-hint="logo brand"/>
                                                <h4 className="font-semibold text-sm line-clamp-3">{conference.title}</h4>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-gray-200 text-sm space-y-2 text-muted-foreground">
                                                <p className="flex items-center justify-center gap-2"><Calendar className="h-4 w-4 text-primary"/><span>{conference.date}</span></p>
                                                <p className="flex items-center justify-center gap-2"><MapPin className="h-4 w-4 text-primary"/><span>{conference.location}</span></p>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-white/80 text-black hover:bg-white" />
                        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-white/80 text-black hover:bg-white" />
                    </Carousel>
                )}
            </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    <section>
                        <div className="space-y-6">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <Card key={i} className="p-4"><Skeleton className="h-24 w-full" /></Card>
                                ))
                            ) : paginatedConferences.length > 0 ? (
                                paginatedConferences.map(conference => (
                                    <Card key={conference.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="p-4 flex flex-col md:flex-row items-center gap-4">
                                            <Image src={conference.imageSrc || 'https://placehold.co/120x120.png'} alt={conference.shortTitle} width={120} height={120} className="w-28 h-28 object-contain" data-ai-hint="logo brand"/>
                                            <div className="text-center md:text-left flex-1 space-y-2">
                                                <h4 className="font-bold text-base hover:text-primary"><Link href={`/conference/${conference.id}`}>{conference.title}</Link></h4>
                                                <p className="text-sm text-primary font-semibold flex items-center justify-center md:justify-start gap-2"><Calendar className="h-4 w-4"/>{conference.date}</p>
                                            </div>
                                            <div className="text-center md:text-right space-y-2">
                                                 <p className="text-sm font-bold flex items-center justify-center md:justify-end gap-2 text-primary hover:underline"><MapPin className="h-4 w-4" /> {conference.location}</p>
                                                 <Link href={`/conference/${conference.id}`} className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center md:justify-end gap-1">
                                                    <Eye className="h-4 w-4"/> View Details
                                                 </Link>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-muted-foreground">
                                        No upcoming conferences found. Please check back later.
                                    </p>
                                </div>
                            )}
                        </div>
                         {upcomingConferences.length > 0 && (
                            <div className="flex items-center justify-between mt-8">
                                <div className="text-sm text-muted-foreground">
                                    Showing {paginatedConferences.length} of {upcomingConferences.length} conferences.
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm font-medium">Rows per page</p>
                                        <Select
                                            value={`${rowsPerPage}`}
                                            onValueChange={(value) => {
                                                setRowsPerPage(Number(value))
                                                setCurrentPage(1)
                                            }}
                                        >
                                            <SelectTrigger className="h-8 w-[70px]">
                                                <SelectValue placeholder={`${rowsPerPage}`} />
                                            </SelectTrigger>
                                            <SelectContent side="top">
                                                {[5, 10, 20, 30].map((pageSize) => (
                                                    <SelectItem key={pageSize} value={`${pageSize}`}>
                                                        {pageSize}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="text-sm font-medium">
                                        Page {currentPage} of {totalPages}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                        >
                                            Next
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-6">
                     <Card>
                        <CardHeader className="text-center bg-muted/50">
                            <CardTitle>Indexed By</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                             <div className="grid grid-cols-2 gap-4">
                                 <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx1/120/50" width={120} height={50} alt="DOAJ" data-ai-hint="logo brand" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx2/120/50" width={120} height={50} alt="Scopus" data-ai-hint="logo company" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx3/120/50" width={120} height={50} alt="EBSCO" data-ai-hint="logo tech" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx4/120/50" width={120} height={50} alt="Crossref" data-ai-hint="logo business" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx5/120/50" width={120} height={50} alt="DOAJ" data-ai-hint="logo brand" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx6/120/50" width={120} height={50} alt="Scopus" data-ai-hint="logo company" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx7/120/50" width={120} height={50} alt="EBSCO" data-ai-hint="logo tech" className="object-contain" /></div>
                                                         <div className="p-2 border rounded-md flex items-center justify-center"><Image src="https://picsum.photos/seed/idx8/120/50" width={120} height={50} alt="Crossref" data-ai-hint="logo business" className="object-contain" /></div>
                                                     </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-red-600 text-white text-center p-6">
                        <h3 className="text-xl font-bold">Life Science Conferences</h3>
                        <Button variant="outline" className="mt-4 bg-white text-red-600 hover:bg-white/90">Visit Now</Button>
                    </Card>
                    <ConferenceSidebarForm />
                </aside>
            </div>
        </div>
    </div>
  );
}
