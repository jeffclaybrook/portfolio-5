import { ReactNode } from "react"

type MainProps = {
 children: ReactNode
}

const Main = ({ children }: MainProps) => {
 return (
  <main className="px-4">{children}</main>
 )
}

export default Main