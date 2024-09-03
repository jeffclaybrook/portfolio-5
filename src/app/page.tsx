import Link from "next/link"
import Artboards from "@/components/artboards"
import Card from "@/components/card"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import ContactForm from "@/components/form"
import Project from "@/components/project"
import Testimonial from "@/components/testimonial"
import Typewriter from "@/components/typewriter"
import ChevronRight from "@/components/icons/ChevronRight"
import Resume from "@/components/icons/Resume"
import Github from "@/components/icons/Github"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { about, skills, projects, testimonials, faqs } from "@/lib/data"

export default function Home() {
  return (
    <>
      <Header image="/images/hero-1.webp">
        <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">Hi, my name is <strong className="font-bold text-slate-50">Jeff</strong></h1>
        <p className="text-2xl lg:text-2xl mb-4 text-slate-300">and I&apos;m a <Typewriter /></p>
        <div className="flex items-center gap-4">
          <Button variant="custom" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <Resume className="mr-2" />
              My Resume
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://github.com/jeffclaybrook" target="_blank" rel="noreferrer">
              <Github className="mr-2" />
              My Github
            </a>
          </Button>
        </div>
      </Header>
      <Main>
        <Section title="About" subtitle="A little bit about me and the things I dabble in">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
            {about.map((item, i) => (
              <Card
                key={i}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-16">
            <Button variant="customOutline" size="lg" asChild>
              <Link href="/about">
                More About Me
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </Section>
        <Testimonial
          quote={testimonials[0].quote}
          name={testimonials[0].name}
          title={testimonials[0].title}
          image={testimonials[0].image}
        />
        <Section title="Skills" subtitle="I'm a Jeff of all trades">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
            {skills.map((skill, i) => (
              <Card
                key={i}
                title={skill.title}
                icon={skill.icon}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-16">
            <Button variant="customOutline" size="lg" asChild>
              <Link href="/skills">
                More Skills
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </Section>
        <Testimonial
          quote={testimonials[1].quote}
          name={testimonials[1].name}
          title={testimonials[1].title}
          image={testimonials[1].image}
        />
        <Section title="Projects" subtitle="A few sample projects you can demo">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3.5">
            {projects.map((project, i) => (
              <Project
                key={i}
                title={project.title}
                href={project.href}
                image={project.image}
              />
            ))}
          </div>
          <div className="flex items-center justify-center mt-16">
            <Button variant="customOutline" size="lg" asChild>
              <Link href="/projects">
                More Projects
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </Section>
        <Testimonial
          quote={testimonials[2].quote}
          name={testimonials[2].name}
          title={testimonials[2].title}
          image={testimonials[2].image}
        />
        <Section title="Artboards" subtitle="Getting the most out of every pixel">
          <div>
            <Artboards />
          </div>
          <div className="flex items-center justify-center mt-16">
            <Button variant="customOutline" size="lg" asChild>
              <Link href="/artboards">
                More Artboards
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </Section>
        <Testimonial
          quote={testimonials[3].quote}
          name={testimonials[3].name}
          title={testimonials[3].title}
          image={testimonials[3].image}
        />
        <Section title="FAQs" subtitle="Frequently asked questions">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem value={item.value} key={i}>
                <AccordionTrigger className="text-start">{item.question}</AccordionTrigger>
                <AccordionContent>{item.response}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>
        <Testimonial
          quote={testimonials[4].quote}
          name={testimonials[4].name}
          title={testimonials[4].title}
          image={testimonials[4].image}
        />
        <Section title="Contact" subtitle="Let's get in touch!">
          <ContactForm />
        </Section>
      </Main>
    </>
  )
}