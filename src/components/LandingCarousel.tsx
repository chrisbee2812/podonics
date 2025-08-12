"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const carouselItems = [
  {
    image: "https://placehold.co/1600x800.png",
    hint: "medical device",
    title: "Uncompromising Safety",
    description: "The Safe-T-Pen features a unique locking mechanism to prevent accidental needlestick injuries.",
    cta: "Learn More",
    link: "/product",
  },
  {
    image: "https://placehold.co/1600x800.png",
    hint: "clinic environment",
    title: "Designed for Clinicians",
    description: "Ergonomically designed for comfort and precision during procedures.",
    cta: "View Features",
    link: "/product",
  },
  {
    image: "https://placehold.co/1600x800.png",
    hint: "patient care",
    title: "Patient-Centric Innovation",
    description: "Enhancing patient safety and comfort is at the core of our design philosophy.",
    cta: "Our Mission",
    link: "/product",
  },
  {
    image: "https://placehold.co/1600x800.png",
    hint: "global network",
    title: "Available Worldwide",
    description: "Find a Podonics distributor near you, wherever you are in the world.",
    cta: "Find a Dealer",
    link: "/locations",
  },
]

export function LandingCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <Card className="border-none rounded-none">
              <CardContent className="relative flex aspect-video items-center justify-center p-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  data-ai-hint={item.hint}
                  width={1600}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute text-white text-center p-4">
                  <h2 className="text-4xl md:text-6xl font-bold font-headline mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                    {item.description}
                  </p>
                  <Button asChild size="lg" className="font-bold">
                    <Link href={item.link}>{item.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
    </Carousel>
  )
}
