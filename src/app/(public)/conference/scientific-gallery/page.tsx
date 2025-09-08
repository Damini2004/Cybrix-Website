
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Eye } from "lucide-react";
import Link from "next/link";

const galleryItems = [
    { src: "https://picsum.photos/800/600", alt: "Scientific Poster 1", title: "Quantum Entanglement", author: "Dr. Evelyn Reed", hint: "science research" },
    { src: "https://picsum.photos/800/601", alt: "Scientific Poster 2", title: "AI in Medicine", author: "Dr. Samuel Chen", hint: "medical technology" },
    { src: "https://picsum.photos/800/602", alt: "Event Photo 1", title: "Keynote Address", author: "Conference 2023", hint: "conference presentation" },
    { src: "https://picsum.photos/800/603", alt: "Scientific Poster 3", title: "Climate Change Models", author: "Dr. Aisha Khan", hint: "earth climate" },
    { src: "https://picsum.photos/800/604", alt: "Event Photo 2", title: "Networking Session", author: "Symposium 2024", hint: "team collaboration" },
    { src: "https://picsum.photos/800/605", alt: "Scientific Poster 4", title: "Nanotechnology Breakthroughs", author: "Dr. Ben Carter", hint: "science technology" },
];

export default function ScientificGalleryPage() {
  return (
    <div className="bg-secondary/30">
      <section className="relative w-full h-[400px] bg-primary/10 flex items-center justify-center text-center px-4">
        <Image
          src="https://picsum.photos/1600/400"
          alt="Abstract background"
          data-ai-hint="abstract background"
          fill
          className="object-cover opacity-10"
        />
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Scientific Gallery
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            A visual showcase of groundbreaking research, innovative posters, and memorable moments from our conferences.
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {galleryItems.map((item, index) => (
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
                <Button size="lg" variant="outline">Load More</Button>
            </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                      <Image
                          src="https://picsum.photos/800/600"
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
