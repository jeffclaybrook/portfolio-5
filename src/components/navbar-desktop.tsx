"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavbarButton } from "./navbar-button"
import { NavbarItems } from "@/types"
import { cn } from "@/lib/utils"

interface NavbarDesktopProps {
 navbarItems: NavbarItems
}

const NavbarDesktop = (props: NavbarDesktopProps) => {
 const pathname = usePathname()

 return (
  <nav className="flex items-center justify-between absolute w-full">
   <div className="flex-1 px-2 mx-2">
    <Link href={"/"} className="uppercase text-lg text-slate-300">
     Jeffrey <strong className="text-slate-50">Claybrook</strong>
    </Link>
   </div>
   <div className="flex-none hidden lg:block">
    <ul className="menu menu-horizontal">
     {props.navbarItems.links.map((link, i) => (
      <li key={i}>
       <Link href={link.href}>
        <NavbarButton
         className={cn(
          "text-slate-300 text-lg rounded-none focus:text-slate-50 px-1 bg-transparent focus:bg-transparent hover:bg-transparent hover:text-slate-50 active:bg-transparent",
          pathname === link.href && "border-b text-slate-50"
         )}
        >
         {link.label}
        </NavbarButton>
       </Link>
      </li>
     ))}
    </ul>
   </div>
  </nav>
 )
}

export default NavbarDesktop