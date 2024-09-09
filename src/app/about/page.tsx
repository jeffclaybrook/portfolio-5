import Link from "next/link"
import Card from "@/components/card"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import ChevronLeft from "@/components/icons/ChevronLeft"
import { Button } from "@/components/ui/button"
import { about } from "@/lib/data"

export default function Page() {
 return (
  <>
   <Header image="/images/hero-2.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-slate-50 mb-2">About</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-slate-300">A little bit about me and what I bring to the party</p>
   </Header>

   <Main>
    <Section>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
      {about.map((about, i) => (
       <Card
        key={i}
        title={about.title}
        subtitle={about.subtitle}
        icon={about.icon}
       />
      ))}
     </div>
     <div className="flex justify-center mt-16">
      <Button variant="customOutline" size="lg">
       <Link href="/" className="flex items-center">
        <ChevronLeft />
        Back Home
       </Link>
      </Button>
     </div>
    </Section>
   </Main>
  </>
 )
}