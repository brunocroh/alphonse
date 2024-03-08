import { cn, Button, Menubar, Popover, PopoverTrigger, PopoverContent } from "@alphonse/ui"
import { ChevronDown } from "lucide-react"

type MenuItemProps = {
  isActive?: boolean
  onClick: () => void
  className?: string
  children: React.ReactNode
}

export function Menu({ children }: { children: React.ReactNode }) {
  return (
    <Menubar className="border-input h-8 space-x-0 px-0 shadow-lg">
      {children}
    </Menubar>
  )
}

export function MenuItem({
  isActive,
  onClick,
  className,
  children,
  ...props
}: MenuItemProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      aria-checked={isActive}
      className={cn(
        "aria-checked:bg-secondary aria-checked:text-primary hover:bg-secondary h-8 rounded-none p-2 first:rounded-l-md last:rounded-r-md active:scale-95",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

type MenuSelectItem = {
  children: React.ReactNode;
  onClick: () => void;
}

export function MenuSelectItem({children, onClick}: MenuSelectItem) {
  return (
    <Button variant="ghost" onClick={onClick}>{children}</Button>
  )
}

type MenuSelect = {
  activeOption: string;
  children?: React.ReactNode[];
}

export function MenuSelect({activeOption, children}: MenuSelect) {
  return (
    <Popover>
      <PopoverTrigger className="hover:bg-secondary flex h-8 flex-row items-center space-x-2 p-2 text-sm">
        <span>
          {activeOption}
        </span>
        <ChevronDown strokeWidth={1} className="color-input" size={14} />

      </PopoverTrigger>
      <PopoverContent align="start" className="border-input flex w-52 flex-col space-y-1">
        {children}
      </PopoverContent>
    </Popover>
  )
}
