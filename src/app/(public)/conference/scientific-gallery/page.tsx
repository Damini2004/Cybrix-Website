// src/app/(public)/conference/scientific-gallery/page.tsx
"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
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

const moreGalleryItems = [
    { src: "/scientific-gallery.png", alt: "Gallery Image 1", hint: "science research" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 2", hint: "medical technology" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 3", hint: "conference presentation" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 4", hint: "earth climate" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 5", hint: "team collaboration" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 6", hint: "science technology" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 7", hint: "science lab" },
    { src: "/scientific-gallery.png", alt: "Gallery Image 8", hint: "researcher writing" },
];

export default function ScientificGalleryPage() {
  const [mainApi, setMainApi] = React.useState<CarouselApi>()
  const [thumbApi, setThumbApi] = React.useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [bgImage, setBgImage] = React.useState(galleryItems[0].src);


  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
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
    const newSelectedIndex = mainApi.selectedScrollSnap();
    setSelectedIndex(newSelectedIndex)
    setBgImage(galleryItems[newSelectedIndex].src);
    thumbApi.scrollTo(newSelectedIndex)
  }, [mainApi, thumbApi])

  React.useEffect(() => {
    if (!mainApi) return
    onSelect()
    mainApi.on("select", onSelect)
    mainApi.on("reInit", onSelect)
  }, [mainApi, onSelect])

  return (
    <div className="bg-secondary/30">
        <section 
            className="w-full py-16 md:py-24 relative bg-cover bg-center bg-no-repeat transition-all duration-500"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Scientific Gallery</h1>
                    <p className="mt-2 text-white/80 max-w-2xl mx-auto">
                        A visual journey through groundbreaking research and discoveries presented at our conferences.
                    </p>
                </div>
                <div className="flex flex-col gap-6 max-w-7xl mx-auto">
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
                            <Card className="overflow-hidden rounded-xl shadow-lg border-white/20 bg-white/10">
                                <CardContent className="p-0 relative aspect-video">
                                <Image 
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    data-ai-hint={item.hint}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm">{item.author}</p>
                                </div>
                                </CardContent>
                            </Card>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                    </Carousel>
                    <Carousel
                        setApi={setThumbApi}
                        opts={{
                            containScroll: "keepSnaps",
                            dragFree: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2">
                        {galleryItems.map((item, index) => (
                            <CarouselItem key={index} className="pl-2 basis-1/4 md:basis-1/6 lg:basis-1/8">
                            <div
                                onClick={() => onThumbClick(index)}
                                className={cn(
                                "block aspect-video relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ring-offset-background ring-offset-4 h-full",
                                selectedIndex === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                                )}
                            >
                                <Image 
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    data-ai-hint={item.hint}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>

      <section className="w-full pb-16 md:pb-24 overflow-hidden bg-background">
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
