"use client"

import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import { Card } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { desktopArtboards, mobileArtboards } from "@/lib/data"

export default function Artboards() {
 const isDesktop = useMediaQuery("(min-width: 1024px)", {
  initializeWithValue: false
 })

 return (
  <Tabs defaultValue="desktop">
   <TabsList className="grid w-full grid-cols-2 mb-4">
    <TabsTrigger value="desktop">Desktop</TabsTrigger>
    <TabsTrigger value="mobile">Mobile</TabsTrigger>
   </TabsList>
   <TabsContent value="desktop">
    <Carousel>
     <CarouselContent>
      {desktopArtboards.map((artboard, i) => (
       <CarouselItem key={i}>
        <Card className="p-4">
         <Image
          src={artboard.src}
          alt="Artboard"
          width="1024"
          height="600"
          className="w-full mx-auto rounded-md"
         />
        </Card>
       </CarouselItem>
      ))}
     </CarouselContent>
     {isDesktop && (
      <>
       <CarouselPrevious />
       <CarouselNext />
      </>
     )}
    </Carousel>
   </TabsContent>
   <TabsContent value="mobile">
    <Carousel>
     <CarouselContent>
      {mobileArtboards.map((artboard, i) => (
       <CarouselItem key={i}>
        <Card className="p-4">
         <Image
          src={artboard.src}
          alt="Artboard"
          width="338"
          height="600"
          className="mx-auto rounded-md"
         />
        </Card>
       </CarouselItem>
      ))}
     </CarouselContent>
     {isDesktop && (
      <>
       <CarouselPrevious />
       <CarouselNext />
      </>
     )}
    </Carousel>
   </TabsContent>
  </Tabs>
 )
}