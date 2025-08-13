import { PersonCard, type PersonCardProps } from "@/components/PersonCard"

const teamMembers: PersonCardProps[] = [
  {
    name: "Dr. Evelyn Reed",
    role: "Founder & Chief Medical Officer",
    bio: "With over 20 years of experience in podiatric surgery, Dr. Reed is the visionary behind the Safe-T-Pen, driven by a passion for clinician safety.",
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "James Carter",
    role: "Chief Executive Officer",
    bio: "James brings a wealth of experience in medical device commercialization, leading Podonics' mission to become a global standard in clinical safety.",
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "Aisha Khan",
    role: "Head of Engineering",
    bio: "Aisha led the design and development of the Safe-T-Pen. Her expertise in biomedical engineering was critical to its revolutionary safety mechanism.",
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "Ben Rodriguez",
    role: "Lead Product Designer",
    bio: "Ben's focus on user-centric design ensured that the Safe-T-Pen is not only safe but also ergonomic and intuitive for healthcare professionals.",
    imageUrl: "https://placehold.co/120x120.png",
  },
  {
    name: "Olivia Chen",
    role: "Director of Quality & Regulatory Affairs",
    bio: "Olivia ensures that every Podonics product meets the highest standards of quality and compliance, navigating the complex global regulatory landscape.",
    imageUrl: "https://placehold.co/120x120.png",
  },
    {
    name: "Marcus Thorne",
    role: "Head of Global Sales",
    bio: "Marcus is responsible for building relationships with our distribution partners worldwide, bringing the Safe-T-Pen to clinicians everywhere.",
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((person) => (
          <PersonCard key={person.name} {...person} />
        ))}
      </div>
    </div>
  )
}
