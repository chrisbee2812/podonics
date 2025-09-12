import Image from "next/image"
import { CheckCircle, Shield, Syringe, Book, Users, HeartHandshake, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const features = [
  {
    icon: Shield,
    title: "Precise Application",
    description: "Ultra fine tip provides accurate and controlled delivery of Liquid Phenol to the nail matrix eliminating over use.",
  },
  {
    icon: Users,
    title: "Safe, Non Splash Application",
    description: "Designed for safety, all Liquid Phenol is contained within a glass ampoule and sealed inside a plastic delivery case, reducing evaporation and eliminating splash.",
  },
  {
    icon: CheckCircle,
    title: "Accuracy of Delivery",
    description: "SafeTPen Liquid Phenol has been coloured with a blue medical dye, improving the accuracy of delivery.",
  },
  {
      icon: Syringe,
      title: "0.4mls of Liquid Phenol 89% USP",
      description: "Each SafeTPen device contains 0.4ml of Liquid Phenol 89% USP."
  },
  {
      icon: HeartHandshake,
      title: "Snap, Snap, Squeeze",
      description: "SafeTPenTM devices feature a lightweight and ergonomic design, activated through a simple Snap, Snap, Squeeze action."
  },
]

const specifications = [
    { name: "Product Name", value: "Podonics SafeTPen" },
    { name: "Model Number", value: "PDP89B" },
]


export default function ProductPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline">
              The Podonics SafeTPen
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the next generation of clinical safety and precision. The SafeTPen is meticulously engineered to protect healthcare professionals while delivering unparalleled performance and reliability.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
               <Button asChild size="lg">
                <Link href="/locations">Find a Distributor</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/Safetpen-600x400.jpg"
              data-ai-hint="medical device pen"
              alt="Safe-T-Pen in use"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-card -mx-container -my-8 px-container py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Key Features</h2>
          <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            Designed with the user in mind, for safety, comfort, and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
            {features.map((feature) => (
                <Card key={feature.title} className="text-center flex flex-col items-center p-6">
                    <CardHeader className="flex flex-col items-center gap-4">
                        <feature.icon className="w-8 h-8 text-primary" />
                        <CardTitle className="font-headline">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {feature.description}
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
      
      <section className="bg-card -mx-container -my-8 px-container py-12 md:py-24">
         <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">See It In Action</h2>
          <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
            Watch our video to learn more about the SafeTPen's innovative features.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/cEMvrlZ90-8?feature=oembed" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Product Information:</h2>
                <div className="flex flex-col gap-4 min-[400px]:flex-column">
                    <Button asChild size="lg">
                        <a href="/docs/PODONICS-4PP-210mm.pdf" target="_blank" rel="noopener noreferrer">
                            <Book className="mr-2 h-5 w-5" />
                            SafeTPen Overview
                        </a>
                    </Button>
                    <Button asChild size="lg">
                        <a href="/docs/IFU-PDP89B.V3-Instructions-for-Use.pdf" target="_blank" rel="noopener noreferrer">
                            <Book className="mr-2 h-5 w-5" />
                            SafeTPen instructions for use
                        </a>
                    </Button>
                    <Button asChild size="lg">
                        <a href="/docs/SDS-PDP89B.V1-Podonics-Dispence-Phenol-Blue-89_-Safety-Data-Sheet.pdf" target="_blank" rel="noopener noreferrer">
                            <Book className="mr-2 h-5 w-5" />
                            SafeTPen Safety Data Sheet
                        </a>
                    </Button>
                </div>
            </div>
            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableBody>
                            {specifications.map((spec) => (
                            <TableRow key={spec.name}>
                                <TableCell className="font-medium">{spec.name}</TableCell>
                                <TableCell>{spec.value}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  )
}
