type CardProps = {
 title: string
 subtitle?: string
 icon: JSX.Element
}

export default function Card({ title, subtitle, icon }: CardProps) {
 return (
  <div className="flex flex-col items-center justify-center text-center gap-3.5 bg-slate-50 shadow-sm rounded-md py-6 px-3.5">
   <span className="flex items-center justify-center h-14 w-14 rounded-md p-3.5 text-primary bg-blue-100">{icon}</span>
   <h4 className="text-center text-xl tracking-wide text-black whitespace-nowrap">{title}</h4>
   {subtitle && <p className="text-center text-black">{subtitle}</p>}
  </div>
 )
}