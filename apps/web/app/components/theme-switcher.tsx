"use client"

import * as React from "react"
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@alphonse/ui"
import { Check, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  console.log({theme})

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="transition-transform active:scale-95">
        <Button variant="outline" size="icon" >
          <Sun className="size-[1rem] rotate-0 scale-100 text-black transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="transition-al text-primary absolute size-[1rem] rotate-90 scale-0 text-white dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-input">
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex flex-row justify-between">
          <span>
            Light
          </span>
          {theme === 'light' && <Check size={12} />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex flex-row justify-between ">
          <span>
            Dark
          </span>
          {theme === 'dark' && <Check size={14} />}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
