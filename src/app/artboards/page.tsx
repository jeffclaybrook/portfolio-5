import Link from "next/link"
import Artboards from "@/components/artboards"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import ChevronLeft from "@/components/icons/ChevronLeft"
import { Button } from "@/components/ui/button"

export default function Page() {
 return (
  <>
   <Header image="/images/hero-2.webp">
   <h1 className="text-4xl lg:text-5xl font-light text-slate-50 mb-2">Artboards</h1>
   <p className="text-2xl lg:text-2xl mb-4 text-slate-300">Getting the most out of every pixel</p>
   </Header>

   <Main>
    <Section>
     <Artboards />
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