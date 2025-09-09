// src/app/(public)/conference/conference-videos/page.tsx
"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

const galleryItems = [
    { src: "/scientific-gallery.png", alt: "Event Photo 1", title: "Keynote Address", author: "Conference 2023", hint: "conference presentation" },
    { src: "/scientific-gallery.png", alt: "Event Photo 2", title: "Networking Session", author: "Symposium 2024", hint: "team collaboration" },
    { src: "/scientific-gallery.png", alt: "Event Photo 3", title: "Poster Session", author: "Innovation Summit 2024", hint: "poster session" },
    { src: "/scientific-gallery.png", alt: "Event Photo 4", title: "Panel Discussion", author: "Tech Conference 2024", hint: "panel discussion" },
    { src: "/scientific-gallery.png", alt: "Event Photo 5", title: "Award Ceremony", author: "Annual Gala 2023", hint: "awards ceremony" },
    { src: "/scientific-gallery.png", alt: "Event Photo 6", title: "Workshop Activity", author: "Skills Workshop 2024", hint: "team working" },
];

const moreGalleryItems = [
    { src: "/scientific-gallery.png", alt: "Gallery Image 1", hint: "conference audience" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 2", hint: "speaker presentation" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 3", hint: "group discussion" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 4", hint: "research poster" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 5", hint: "team collaboration" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 6", hint: "science technology" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 7", hint: "science lab" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 8", hint: "researcher writing" },
];


export default function ConferenceVideosPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="bg-background">
      <section className="relative w-full py-20 md:py-32">
        <Image
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&h=900&auto=format&fit=crop"
            alt="Conference background"
            data-ai-hint="conference event"
            fill
            className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Conference Videos & Galleries</h1>
            <p className="mt-4 max-w-3xl mx-auto text-white/80 md:text-xl/relaxed">
              Watch sessions, view photos, and relive the key moments from our premier conferences and events.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-8">
              {galleryItems.map((item, index) => (
                <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl bg-white/10 backdrop-blur-sm">
                      <CardContent className="p-0 relative aspect-video">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          data-ai-hint={item.hint}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                          <div className="text-white">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm opacity-90">{item.author}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-background/80 hover:bg-background" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-background/80 hover:bg-background" />
          </Carousel>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 overflow-hidden bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">More Highlights</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              A visual showcase of groundbreaking research and memorable moments from our events.
            </p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex w-max animate-scroll-x">
            {[...moreGalleryItems, ...moreGalleryItems].map((item, index) => (
              <div key={index} className="relative aspect-[4/3] w-80 mx-4 shrink-0 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  data-ai-hint={item.hint}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
