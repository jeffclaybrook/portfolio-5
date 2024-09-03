"use client"

import { useState } from "react"
import { Gallery } from "react-grid-gallery"
import { artboards, CustomImage } from "@/lib/data"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

const slides = artboards.map(({ original, width, height }) => ({
 src: original,
 width,
 height
}))

const Artboards = () => {
 const [index, setIndex] = useState(-1)

 const handleClick = (index: number, item: CustomImage) => {
  setIndex(index)
 }

 return (
  <>
   <Gallery
    images={artboards}
    onClick={handleClick}
    enableImageSelection={false}
    margin={2}
    rowHeight={220}
    maxRows={4}
   />
   <Lightbox
    slides={slides}
    open={index >= 0}
    index={index}
    close={() => setIndex(-1)}
   />
  </>
 )
}

export default Artboards