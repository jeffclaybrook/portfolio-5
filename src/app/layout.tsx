import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ReactNode } from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jeff Claybrook",
  description: "Built using NextJS, TailwindCSS, DaisyUI, and shadcn/ui"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <GoogleAnalytics gaId="G-623J8MSMLL" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}