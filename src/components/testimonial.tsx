type TestimonialProps = {
 quote: string
 name: string
 title: string
 image: string
}

export default function Testimonial({ quote, name, title, image }: TestimonialProps) {
 return (
  <article className="hero max-w-6xl mx-auto rounded-3xl overflow-hidden text-slate-200" style={{ backgroundImage: `url(${image})`}}>
   <div className="hero-overlay flex flex-col justify-center bg-opacity-70 p-6 min-h-[260px]">
    <h3 className="text-2xl tracking-wide mb-3.5">&quot;{quote}&quot;</h3>
    <h4 className="text-lg tracking-wide mb-1.5">{name}</h4>
    <h5 className="text-base tracking-wide font-medium">-{title}</h5>
   </div>
  </article>
 )
}