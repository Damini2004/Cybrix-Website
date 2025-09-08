// src/app/(public)/conference/scientific-gallery/page.tsx
"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const galleryItems = [
    { src: "/scientific-gallery.png", alt: "Scientific Poster 1", title: "Quantum Entanglement", author: "Dr. Evelyn Reed", hint: "science research" },
    { src: "/scientific-gallery.png", alt: "Scientific Poster 2", title: "AI in Medicine", author: "Dr. Samuel Chen", hint: "medical technology" },
    { src: "/scientific-gallery.png", alt: "Event Photo 1", title: "Keynote Address", author: "Conference 2023", hint: "conference presentation" },
    { src: "/scientific-gallery.png", alt: "Scientific Poster 3", title: "Climate Change Models", author: "Dr. Aisha Khan", hint: "earth climate" },
    { src: "/scientific-gallery.png", alt: "Event Photo 2", title: "Networking Session", author: "Symposium 2024", hint: "team collaboration" },
    { src: "/scientific-gallery.png", alt: "Scientific Poster 4", title: "Nanotechnology Breakthroughs", author: "Dr. Ben Carter", hint: "science technology" },
    { src: "/scientific-gallery.png", alt: "Scientific Poster 5", title: "Genomic Sequencing", author: "Dr. Lena Petrova", hint: "dna helix" },
    { src: "/scientific-gallery.png", alt: "Event Photo 3", title: "Poster Session", author: "Innovation Summit 2024", hint: "poster session" },
];

const moreGalleryItems = [
    { src: "/scientific-gallery.png", alt: "Gallery Image 1", hint: "science research" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 2", hint: "medical technology" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 3", hint: "conference presentation" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 4", hint: "earth climate" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 5", hint: "team collaboration" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 6", hint: "science technology" },
];

export default function ScientificGalleryPage() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const onThumbClick = React.useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return
      mainApi.scrollTo(index)
    },
    [mainApi, thumbApi]
  )

  const onSelect = React.useCallback(() => {
    if (!mainApi || !thumbApi) return
    setSelectedIndex(mainApi.selectedScrollSnap())
    thumbApi.scrollTo(mainApi.selectedScrollSnap())
  }, [mainApi, thumbApi, setSelectedIndex])

  React.useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
  }, [mainApi, onSelect])

  return (
    <div className="bg-secondary/30">
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 max-w-5xl mx-auto">
              <Carousel 
                setApi={setMainApi} 
                className="w-full"
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {galleryItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <Card className="overflow-hidden">
                        <CardContent className="p-0 relative aspect-video">
                           <Image 
                              src={item.src}
                              alt={item.alt}
                              fill
                              data-ai-hint={item.hint}
                              className="w-full h-auto object-cover"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
              </Carousel>
              <Carousel
                setApi={setThumbApi}
                opts={{
                  align: "start",
                  containScroll: "keepSnaps",
                  dragFree: true,
                }}
                className="w-full"
              >
                <CarouselContent className="p-1 -ml-2">
                  {galleryItems.map((item, index) => (
                    <CarouselItem key={index} className="pl-2 basis-1/4 md:basis-1/5 lg:basis-1/6">
                      <div
                        onClick={() => onThumbClick(index)}
                        className={cn(
                          "block aspect-square relative rounded-md overflow-hidden cursor-pointer transition-all duration-300 ring-offset-background ring-offset-2",
                          selectedIndex === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                        )}
                      >
                         <Image 
                              src={item.src}
                              alt={item.alt}
                              fill
                              data-ai-hint={item.hint}
                              className="w-full h-auto object-cover"
                          />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
          <div className="container px-4 md:px-6">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter">More Highlights</h2>
                  <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                      A visual showcase of groundbreaking research and memorable moments from our events.
                  </p>
              </div>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                  {moreGalleryItems.map((item, index) => (
                      <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                          <Image 
                              src={item.src}
                              alt={item.alt}
                              width={800}
                              height={600}
                              data-ai-hint={item.hint}
                              className="w-full h-auto object-cover"
                          />
                      </div>
                  ))}
              </div>
              <div className="text-center mt-12">
                  <Button size="lg" variant="outline">
                      Load More Photos
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
