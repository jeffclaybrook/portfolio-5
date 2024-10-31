import { ReactNode, FC } from "react"

type MainProps = {
 children: ReactNode
 className?: string
}

const Main: FC<MainProps> = ({ children, className = "" }) => {
 return (
  <main className={`px-4 ${className}`} role="main">{children}</main>
 )
}

export default Main