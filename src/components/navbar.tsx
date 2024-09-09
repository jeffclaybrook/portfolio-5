"use client"

import NavbarDesktop from "./navbar-desktop"
import NavbarMobile from "./navbar-mobile"
import { useMediaQuery } from "usehooks-ts"
import { NavbarItems } from "@/types"

const navbarItems: NavbarItems = {
 links: [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Artboards", href: "/artboards" },
  { label: "Contact", href: "/contact" },
 ]
}

const Navbar = () => {
 const isDesktop = useMediaQuery("(min-width: 1024px)", {
  initializeWithValue: false
 })

 if (isDesktop) {
  return <NavbarDesktop navbarItems={navbarItems} />
 }

 return <NavbarMobile navbarItems={navbarItems} />
}

export default Navbar