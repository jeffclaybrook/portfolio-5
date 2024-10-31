import ContactForm from "@/components/form"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import Transition from "@/components/transition"

export default function Page() {
 return (
  <Transition>
   <Header image="/images/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light text-slate-50 mb-2">Contact</h1>
    <p className="text-2xl lg:text-2xl mb-4 text-slate-300">Fill out the form below to get in touch</p>
   </Header>

   <Main>
    <Section>
     <ContactForm />
    </Section>
   </Main>
  </Transition>
 )
}