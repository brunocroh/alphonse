import { cn, Button, Menubar, Popover, PopoverTrigger, PopoverContent } from "@alphonse/ui"
import { useEditor } from "@tiptap/react"

type MenuItemProps = {
  isActive?: boolean
  onClick: () => void
  className?: string
  children: React.ReactNode
}

export function Menu({ children }: { children: React.ReactNode }) {
  return (
    <Menubar className="border-input h-8 space-x-0 px-0 py-4 shadow-lg">
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
        "aria-checked:bg-secondary aria-checked:text-primary hover:bg-secondary h-8 rounded-none p-2 first:rounded-l-md last:rounded-r-md",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

type MenuSelect = {
  activeOption: string;
  options: string[];
}

type MenuSelectItem = {
  children: React.ReactNode
}

export function MenuSelectItem({children}: MenuSelectItem) {
  return (
    <Button variant="ghost">{children}</Button>
  )
}

export function MenuSelect({activeOption, options, onClick}: MenuSelect) {
  return (
    <Popover>
      <PopoverTrigger>{activeOption}</PopoverTrigger>
      <PopoverContent className="border-input mt-1 flex flex-col">
        {options.map((option) => (
           <MenuSelectItem key={option} onClick={() => onClick(option)}>{option}</MenuSelectItem>
        ))}
      </PopoverContent>
    </Popover>
  )
}
