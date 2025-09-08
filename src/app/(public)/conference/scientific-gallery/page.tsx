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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

export default function ScientificGalleryPage() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)

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
      <section className="relative w-full h-[400px] bg-primary/10 flex items-center justify-center text-center px-4">
        <Image
          src="/scientific-gallery.png"
          alt="Abstract background"
          data-ai-hint="abstract background"
          fill
          className="object-cover opacity-10"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Scientific Gallery
          </h1>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 max-w-5xl mx-auto">
              <Carousel setApi={setMainApi} className="w-full">
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

      <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                      <Image
                          src="/scientific-gallery.png"
                          alt="Submit your work"
                          data-ai-hint="team presentation"
                          fill
                          className="object-cover"
                      />
                  </div>
                  <div className="space-y-6">
                      <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold text-primary">Contribute to Our Gallery</div>
                      <h2 className="text-3xl font-bold tracking-tighter">Showcase Your Research</h2>
                      <p className="text-muted-foreground text-justify">
                          Have an impactful poster or presentation to share? We invite you to contribute to our ever-growing gallery of scientific achievements. Presenting your work is an excellent opportunity to gain visibility, receive feedback, and connect with a global community of peers. All submissions are reviewed for quality and relevance.
                      </p>
                      <Button asChild size="lg">
                        <Link href="/submit-journal">
                            Submit Your Work <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
