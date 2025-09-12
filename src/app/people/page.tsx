import { PersonCard, type PersonCardProps } from "@/components/PersonCard"

const teamMembers: PersonCardProps[] = [
  {
    name: "Mark Lawrie",
    bio: ["Founder of Podonics Ltd", "MD – Head Of Sales & Marketing", "15 years experience in Podiatry", "Last 5 years in Medical Devices"],
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "Darren Sandy",
    bio: ["Founder of Podonics Ltd", "Technical & Medical Director", "4th Generation of a Family of Podiatrists", "30+ Years as Owner/CEO of DLT Podiatry & Podopro UK", "15 years Experience as Manufacturer of Phenol EzSwabs"],
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "Dan Chin",
    bio: ["QA & RA Director", "20 Years in Medical Device Manufacture", "Regulatory & Compliance Consultant", "ISO 13485 Specialist"],
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "Alberto Sogaro",
    bio: ["Original patent designer for EZ Swab", "Creator of the SafeTPen", "Award winning innovator", "Over 100 patents", "Specialist in unidose medical devices"],
    imageUrl: "https://placehold.co/120x120.png",
  },
  
]

export default function PeoplePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold font-headline">
          Meet the Team
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          The innovators and experts dedicated to revolutionizing clinical safety.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  )
}
