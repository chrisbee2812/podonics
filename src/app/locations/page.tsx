import { type ProviderCardProps } from "@/components/ProviderCard"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, MapPin, Phone } from "lucide-react"


const providers: ProviderCardProps[] = [
  {
    name: "Canonbury Products Ltd",
    address: "Warwick House, St James Rd, Brackley NN13 7XY",
    phone: "01280 706661",
    website: "https://www.canonbury.com/",
    title: "UK Distributor",
  },
  {
    name: "Gill Podiatry",
    address: "22400 Ascoa Court, Strongsville, Ohio 44149-4766",
    phone: "1.800.321.1348",
    website: "https://www.gillpodiatry.com/",
    title: "North America Distributor",
  },
  // {
  //   name: "Briggate Medical",
  //   address: "23-25 Lakewood Blvd, Braeside VIC 3195, Australia",
  //   phone: "+61 3 8586 7800",
  //   website: "https://www.briggatemedical.com/",
  //   title: "Australia Distributor",
  // },
  {
    name: "Allcare Medical Supplies",
    address: "4 Loft Place, Kumeu, Auckland, 0810, New Zealand",
    phone: "09 / 929 - 2747",
    website: "https://www.allcare.co.nz",
    title: "New Zealand Distributor",
  },  
]

export default function LocationsPage() {
  return (
      <div className="py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-headline">
            Our Locations
          </h1>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Find an authorized dealer of the Podonics SafeTPen.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold font-headline text-center mb-4">Worldwide Distributors</h2>
          {providers.map((providers) => (
          <div>
            <h3 key={providers.title} className="text-3xl font-semibold font-headline text-center mb-2 mt-8">{providers.title}:</h3>
            <Card className="max-w-3xl mx-auto shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-headline">{providers.name}</CardTitle>
                    <CardDescription>Authorized Podonics UK Distributor</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6 text-base items-center">
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 mt-1 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">{providers.address}</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <p className="text-muted-foreground">{providers.phone}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Button asChild size="lg">
                            <a href={providers.website} target="_blank" rel="noopener noreferrer">
                                <Globe className="mr-2 h-5 w-5" />
                                Visit Website
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
          </div>
          
          ))}
        </section>

        
      </div>
  )
}
