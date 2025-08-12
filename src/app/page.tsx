import { LandingCarousel } from "@/components/LandingCarousel"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Syringe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section className="container -mx-4">
        <LandingCarousel />
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Introducing the Safe-T-Pen
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Podonics Safe-T-Pen is a revolutionary device designed to enhance safety and precision in clinical procedures. Its patented safety mechanism provides unparalleled protection against needlestick injuries for healthcare professionals.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/product">Discover the Features</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              data-ai-hint="medical device pen"
              alt="Safe-T-Pen"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-card -mx-container -my-8 px-container py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Why Choose Podonics?</h2>
          <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            Our commitment to innovation is driven by the needs of clinicians and the safety of patients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <Syringe className="w-8 h-8 text-accent" />
                <CardTitle className="font-headline">Unmatched Precision</CardTitle>
              </CardHeader>
              <CardContent>
                Engineered for optimal control and performance, ensuring procedures are performed with the utmost accuracy.
              </CardContent>
            </Card>
            <Card className="text-center flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <Shield className="w-8 h-8 text-accent" />
                <CardTitle className="font-headline">Superior Safety</CardTitle>
              </CardHeader>
              <CardContent>
                With our industry-leading safety features, we minimize risks for healthcare providers and patients alike.
              </CardContent>
            </Card>
            <Card className="text-center flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <CheckCircle className="w-8 h-8 text-accent" />
                <CardTitle className="font-headline">Reliability & Quality</CardTitle>
              </CardHeader>
              <CardContent>
                Manufactured to the highest standards, every Safe-T-Pen is a testament to our dedication to quality.
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  )
}
