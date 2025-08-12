import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Globe, MapPin, Phone } from "lucide-react"

export interface ProviderCardProps {
  name: string
  address: string
  phone: string
  website: string
}

export function ProviderCard({ name, address, phone, website }: ProviderCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="font-headline">{name}</CardTitle>
        <CardDescription>Authorized Podonics Dealer</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-accent" />
          <p className="text-sm text-muted-foreground">{phone}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <a href={website} target="_blank" rel="noopener noreferrer">
            <Globe className="mr-2 h-4 w-4" />
            Visit Website
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
