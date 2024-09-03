import Link from "next/link"
import { Button } from "./ui/button"
import { socials } from "@/lib/data"

const Footer = () => {
 return (
  <footer className="flex flex-col items-center py-16 bg-slate-50">
   <Link href="/" className="text-2xl uppercase mb-8">Jeffrey <strong className="font-bold">Claybrook</strong></Link>
   <ul className="flex items-center justify-center gap-4 mb-8">
    {socials.map((social, i) => (
     <li key={i}>
      <Button variant="ghost" size="icon" asChild>
       <a href={social.href} target="_blank" rel="noreferrer">{social.icon}</a>
      </Button>
     </li>
    ))}
   </ul>
   <p className="text-xs text-center mb-2">Built using NextJS, TailwindCSS, DaisyUI, and shadcn/ui</p>
   <p className="text-xs text-center">© 2024 Jeffrey Claybrook</p>
  </footer>
 )
}

export default Footer