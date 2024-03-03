"use client"

import React from "react"
import {AlphonseProvider, AlphonseEditorProvider, AlphonseEditor} from "alphonse"

const content = `
<h1>Hello World! 🌎️</h1>
<p>The best notion like editor</p>
`

export const Editor = () => {
  return (
    <>
      <AlphonseProvider>
        <AlphonseEditorProvider content={content} >
          <AlphonseEditor />
        </AlphonseEditorProvider>
      </AlphonseProvider>
    </>
  )
}
