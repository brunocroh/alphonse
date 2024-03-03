"use client"

import * as React from "react"
import { Github } from "lucide-react"
import {
  Button,
} from "@alphonse/ui"
import Link from "next/link"

export function GithubButton() {

  return (
    <Link href="https://github.com/brunocroh/alphonse">
      <Button variant="outline" size="icon" className="text-black dark:text-white">
        <Github color="currentColor" size={16} />
      </Button>
    </Link>
  )
}
