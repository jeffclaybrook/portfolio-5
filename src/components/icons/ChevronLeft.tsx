import { SVGProps } from "react"

const ChevronLeft = (props: SVGProps<SVGSVGElement>) => {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" height="24px" fill="currentColor" {...props}>
   <title>Chevron Left</title>
   <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
  </svg>
 )
}

export default ChevronLeft