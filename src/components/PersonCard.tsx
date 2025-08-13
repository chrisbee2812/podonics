import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export interface PersonCardProps {
  name: string
  role: string
  bio: string
  imageUrl: string
}

export function PersonCard({ name, role, bio, imageUrl }: PersonCardProps) {
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
          <CardDescription className="text-primary">{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{bio}</p>
      </CardContent>
    </Card>
  )
}
