import "./prosemirror.css"

import React from "react"
import { Card, CardContent, CardHeader } from "@alphonse/ui"
import Bold from "@tiptap/extension-bold"
import Document from "@tiptap/extension-document"
import Heading from "@tiptap/extension-heading"
import Italic from "@tiptap/extension-italic"
import Paragraph from "@tiptap/extension-paragraph"
import Strike from "@tiptap/extension-strike"
import Text from "@tiptap/extension-text"
import Underline from "@tiptap/extension-underline"
import BlockQuote from "@tiptap/extension-blockquote"
import OrderedList from "@tiptap/extension-ordered-list"
import BulletList from "@tiptap/extension-bullet-list"
import ListItem from "@tiptap/extension-list-item"
import { useCurrentEditor, EditorProvider } from "@tiptap/react"

import { BubbleMenu, FloatingMenu } from "./extensions/index"

export const extensions = [
  Document,
  Paragraph,
  Text,
  Heading.configure({
    levels: [1, 2, 3],
  }),
  BlockQuote.configure({
    HTMLAttributes: {
      class: "border-l-4 border-primary",
    },
  }),
  ListItem,
  OrderedList.configure({
    itemTypeName: 'listItem',
  }),
  BulletList.configure({
    itemTypeName: 'listItem'
  }),
  BulletList,
  Underline,
  Strike,
  Bold,
  Italic,
]

export const defaultEditorProps = {
  attributes: {
    class:
    "border-input prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
  },
}


export const AlphonseProvider: React.FC<any> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

type AlphonseEditorProvider = {
  children: React.ReactNode
  extensions?: any;
  content: string;
  editorProps?: any;
}

export const AlphonseEditorProvider: React.FC<AlphonseEditorProvider> = ({children, editorProps, content}) => {
  return (
    <Card className="border-input w-full">
      <CardHeader>
        <div>
          Alphonse Editor
        </div>
      </CardHeader>
      <EditorProvider extensions={extensions} content={content} editorProps={editorProps || defaultEditorProps}>
        <CardContent>
          {children}
        </CardContent>
      </EditorProvider>
    </Card>
  )
}

type AlphonseEditor = {
  children?: React.ReactNode,
}

export const AlphonseEditor: React.FC<AlphonseEditor> = ({children}) => {
  const {editor} = useCurrentEditor()
  if(!editor) return null
  return (
    <>
      <BubbleMenu editor={editor} />
      <FloatingMenu editor={editor} />
      {children}
    </>
  )
}
