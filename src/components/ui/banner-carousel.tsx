
'use client';

import * as React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface BannerCarouselProps {
    images: { src: string; alt: string; hint: string }[];
    children: React.ReactNode;
}

export default function BannerCarousel({ images, children }: BannerCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <section className="relative h-[600px] w-full">
            <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 w-full h-full"
                opts={{ loop: true }}
            >
                <CarouselContent className="-ml-0">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-0">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                data-ai-hint={image.hint}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="relative z-20 h-full w-full flex items-center justify-center p-4">
                {children}
            </div>
        </section>
    );
}
