"use client"

import Link from "next/link"
import Menu from "./icons/Menu"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet"
import { NavbarButtonSheet as NavbarButton } from "./navbar-button"
import { NavbarItems } from "@/types"
import { socials } from "@/lib/data"

interface NavbarMobileProps {
 navbarItems: NavbarItems
}

const NavbarMobile = (props: NavbarMobileProps) => {
 const pathname = usePathname()

 return (
  <Sheet>
   <Link href={"/"} className="uppercase text-lg text-slate-300 absolute top-5 left-3">
    Jeffrey <strong className="text-slate-50">Claybrook</strong>
   </Link>
   <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="absolute top-3 right-3 text-slate-50">
     <Menu />
    </Button>
   </SheetTrigger>
   <SheetContent side="left" className="px-3 py-4">
    <SheetHeader className="flex flex-row justify-between items-center space-y-0">
     <Link href={"/"} className="uppercase text-lg text-slate-900">
      Jeffrey <strong className="text-slate-600">Claybrook</strong>
     </Link>
    </SheetHeader>
    <div className="h-full flex flex-col">
     <div className="flex flex-col w-full gap-1 mt-5 mb-auto">
      {props.navbarItems.links.map((link, i) => (
       <Link key={i} href={link.href}>
        <NavbarButton
         variant={pathname === link.href ? "secondary" : "ghost"}
         className="w-full"
        >
         {link.label}
        </NavbarButton>
       </Link>
      ))}
     </div>
     <ul className="flex items-center justify-around mt-auto mb-4">
      {socials.map((social, i) => (
       <li key={i}>
        <Button variant="ghost" size="icon" asChild>
         <a href={social.href} target="_blank" rel="noreferrer">{social.icon}</a>
        </Button>
       </li>
      ))}
     </ul>
    </div>
   </SheetContent>
  </Sheet>
 )
}

export default NavbarMobile