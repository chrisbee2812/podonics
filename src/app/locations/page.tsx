import { ProviderCard, type ProviderCardProps } from "@/components/ProviderCard"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, MapPin, Phone } from "lucide-react"

const ukProvider: ProviderCardProps = {
    name: "Medisupplies UK",
    address: "123 Health-Care House, London, W1 1AA",
    phone: "020 1234 5678",
    website: "https://www.medisupplies.co.uk",
}

const internationalProviders: ProviderCardProps[] = [
  {
    name: "Podonics North America",
    address: "555 Med-Tech Avenue, New York, NY 10001, USA",
    phone: "+1 (212) 555-0123",
    website: "https://www.podonics-na.com",
  },
  {
    name: "EuroMed Supply GmbH",
    address: "Gesundheitsstraße 10, 10115 Berlin, Germany",
    phone: "+49 30 1234567",
    website: "https://www.euromed-supply.de",
  },
  {
    name: "Podonics Australia",
    address: "Level 10, 100 Medical Plaza, Sydney, NSW 2000, Australia",
    phone: "+61 2 9876 5432",
    website: "https://www.podonics.com.au",
  },
  {
    name: "Nippon Medical Devices",
    address: "1-1-1 Otemachi, Chiyoda-ku, Tokyo 100-8111, Japan",
    phone: "+81 3-1234-5678",
    website: "https://www.nippon-med.jp",
  },
  {
    name: "Canuck Health Supplies",
    address: "789 Innovation Drive, Toronto, ON M5V 2T6, Canada",
    phone: "+1 (416) 555-0199",
    website: "https://www.canuckhealth.ca",
  },
  {
    name: "Santé France Médical",
    address: "25 Rue de la Santé, 75013 Paris, France",
    phone: "+33 1 23 45 67 89",
    website: "https://www.santefr.fr",
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
          Find an authorized dealer of the Podonics Safe-T-Pen.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold font-headline text-center mb-8">UK Distributor</h2>
        <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl font-headline">{ukProvider.name}</CardTitle>
                <CardDescription>Authorized Podonics Prime Dealer</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-base items-center">
                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
                        <p className="text-muted-foreground">{ukProvider.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-accent" />
                        <p className="text-muted-foreground">{ukProvider.phone}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                     <Button asChild size="lg">
                        <a href={ukProvider.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="mr-2 h-5 w-5" />
                            Visit Website
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold font-headline text-center mb-8">International Branches &amp; Distributors</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalProviders.map((provider) => (
            <ProviderCard key={provider.name} {...provider} />
            ))}
        </div>
      </section>
    </div>
  )
}
