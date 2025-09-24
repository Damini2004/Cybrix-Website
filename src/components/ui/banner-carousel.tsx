
'use client';

import * as React from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface BannerCarouselProps {
    images: { src: string; alt: string; hint: string }[];
    children: React.ReactNode;
    className?: string;
}

export default function BannerCarousel({ images, children, className }: BannerCarouselProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    const hasContent = React.Children.count(children) > 0;

    return (
        <section className={cn("relative h-[600px] w-full", className)}>
            <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 w-full h-full"
                opts={{ loop: true }}
            >
                <CarouselContent className="-ml-0 h-full">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="pl-0 h-full relative">
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
            {hasContent && (
                <>
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="relative z-20 h-full w-full flex items-center justify-center p-4">
                        {children}
                    </div>
                </>
            )}
        </section>
    );
}
