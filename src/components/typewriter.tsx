"use client"

import { useTypewriter } from "react-simple-typewriter"

export default function Typewriter() {
 const [text] = useTypewriter({
  words: [
   "product manager.",
   "frontend developer.",
   "UX/UI designer.",
   "content creator.",
   "QA & debugger.",
   "technical writer."
  ],
  loop: 0,
  typeSpeed: 125,
  deleteSpeed: 50,
  delaySpeed: 2050
 })

 return (
  <strong className="font-bold text-slate-50">{text}</strong>
 )
}