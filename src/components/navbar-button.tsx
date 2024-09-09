import { Button, ButtonProps } from "./ui/button"
import { SheetClose } from "./ui/sheet"
import { cn } from "@/lib/utils"

export const NavbarButton = ({
 className,
 children,
 ...props
}: ButtonProps) => {
 return (
  <Button
   variant="ghost"
   className={cn("gap-2 justify-start", className)}
   {...props}
  >
   <span>{children}</span>
  </Button>
 )
}

export const NavbarButtonSheet = (props: ButtonProps) => {
 return (
  <SheetClose asChild>
   <NavbarButton {...props} />
  </SheetClose>
 )
}