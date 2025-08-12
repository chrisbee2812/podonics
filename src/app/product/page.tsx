import Image from "next/image"
import { CheckCircle, Shield, Syringe, Thermometer, BatteryCharging, TestTube } from "lucide-react"
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
    title: "Patented Safety Mechanism",
    description: "A retractable needle shield automatically locks after injection, preventing needlestick injuries.",
  },
  {
    icon: Syringe,
    title: "Ergonomic Design",
    description: "Lightweight and contoured for a comfortable, secure grip, reducing user fatigue.",
  },
  {
    icon: CheckCircle,
    title: "Dose Accuracy",
    description: "Clear dose window and precise dial mechanism for accurate and easy dosage setting.",
  },
]

const specifications = [
    { name: "Product Name", value: "Podonics Safe-T-Pen" },
    { name: "Model Number", value: "STP-2024" },
    { name: "Material", value: "Medical-grade polymer and stainless steel" },
    { name: "Dimensions", value: "150mm x 15mm" },
    { name: "Weight", value: "25g" },
    { name: "Certifications", value: "CE, FDA, ISO 13485" },
]


export default function ProductPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-headline">
              The Podonics Safe-T-Pen
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the next generation of clinical safety and precision. The Safe-T-Pen is meticulously engineered to protect healthcare professionals while delivering unparalleled performance and reliability.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Request a Quote</Link>
              </Button>
               <Button asChild variant="outline" size="lg">
                <Link href="/locations">Find a Distributor</Link>
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
                <Card key={feature.title} className="text-center flex flex-col items-center p-6">
                    <CardHeader className="flex flex-col items-center gap-4">
                        <feature.icon className="w-8 h-8 text-accent" />
                        <CardTitle className="font-headline">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {feature.description}
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Technical Specifications</h2>
            <p className="max-w-[600px] mx-auto mt-4 text-muted-foreground md:text-xl/relaxed">
                Built to the highest industry standards for quality and reliability.
            </p>
        </div>
        <Card className="max-w-3xl mx-auto">
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
      </section>
    </div>
  )
}
