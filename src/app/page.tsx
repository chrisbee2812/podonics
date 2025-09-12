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
              Introducing the SafeTPen
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The SafeTPen by Podonics is a revolutionary device designed to maximise safety and minimise Phenol splash when performing Nail Matrixectomy. It's patented design allows activation and precision unparalleled in the Podiatry market. 
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/product">Discover the Features</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/Safetpen-600x400.jpg"
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Why Choose SafeTPen?</h2>
          <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            SafeTPen has been designed by an extremely experienced team with an extensive record within the Single Application Phenol Medical Device Market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-8">
            <Card className="text-center flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <Syringe className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">Unique Stable Design</CardTitle>
              </CardHeader>
              <CardContent>
                Glass rather than plastic ampoules store phenol without diffusion and vapour release.
              </CardContent>
            </Card>
            <Card className="text-center flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <Shield className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">Enhanced Safety Features</CardTitle>
              </CardHeader>
              <CardContent>
                Activated by lateral not longitudinal forces prevent splashing. Revolutionary "blue" colouring highlights activation and control flow
              </CardContent>
            </Card>
            <Card className="text-center flex flex-col items-center p-6">
              <CardHeader className="flex flex-col items-center gap-4">
                <CheckCircle className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">Easy To Apply</CardTitle>
              </CardHeader>
              <CardContent>
                With a unique tapered non cotton head, designed in consultation with Podiatrists, application is accurate and fibre free.
              </CardContent>
            </Card>
        </div>
      </section>
    </div>
  )
}
