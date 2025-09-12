import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export interface PersonCardProps {
  name: string
  bio: string[]
  imageUrl: string
}

export function PersonCard({ name, bio, imageUrl }: PersonCardProps) {
  return (
    <Card className="text-center flex flex-col items-center p-4 h-full">
      <CardHeader className="flex flex-col items-center gap-4">
        <Image
          src={imageUrl}
          alt={`Photo of ${name}`}
          width={120}
          height={120}
          className="rounded-full"
          data-ai-hint="person professional"
        />
        <div className="text-center">
          <CardTitle className="font-headline text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="text-muted-foreground text-m">{
          bio.map((item, index) => (<li key={index} className="mb-1">{item}</li>)
        )
        }</ul>
      </CardContent>
    </Card>
  )
}
