"use client"

import React from "react"
import {AlphonseProvider, AlphonseEditorProvider, AlphonseEditor} from "alphonse"

const content = "<p>Hello World! 🌎️</p>"

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
