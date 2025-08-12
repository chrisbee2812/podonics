import { Mail, MapPin, Phone } from "lucide-react"
import { ContactForm } from "./ContactForm"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold font-headline">
          Get in Touch
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          We&apos;re here to help. Whether you have a question about our products, need support, or want to become a distributor, please reach out.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 space-y-8 bg-muted/50">
                <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Our Address</h3>
                            <p className="text-muted-foreground">Podonics Ltd.<br/>Innovation Park, Suite 42<br/>Cambridge, CB4 0GF<br/>United Kingdom</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <p className="text-muted-foreground">
                                <a href="mailto:contact@podonics.com" className="hover:text-primary transition-colors">contact@podonics.com</a>
                            </p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p className="text-muted-foreground">
                                <a href="tel:+441223123456" className="hover:text-primary transition-colors">+44 (0) 1223 123 456</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-8 md:p-12">
                 <h2 className="text-2xl font-bold font-headline mb-4">Send us a Message</h2>
                <ContactForm />
            </div>
        </div>
      </Card>
    </div>
  )
}
