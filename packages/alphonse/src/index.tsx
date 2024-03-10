import "./prosemirror.css"

import React from "react"
import { Card, CardContent, CardHeader, Command, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut  } from "@alphonse/ui"
import { Calculator, Calendar, Smile } from "lucide-react"
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
import Dropcursor from "@tiptap/extension-dropcursor"
import TaskItem from "@tiptap/extension-task-item"
import TaskList from '@tiptap/extension-task-list'
import { useCurrentEditor, EditorProvider } from "@tiptap/react"

import { BubbleMenu, DragAndDrop, PlaceholderExtension } from "./extensions/index"
import { SlashCommand } from "./extensions/slash-command"

export const extensions = [
  Document,
  Paragraph,
  Text,
  Heading.configure({
    levels: [1, 2, 3],
  }),
  BlockQuote.configure({
    HTMLAttributes: {
      class: "border-l-4 border-input",
    },
  }),
  ListItem.configure({
    HTMLAttributes: {
      class: "leading-normal",
    },
  }),
  OrderedList.configure({
    itemTypeName: 'listItem',
    HTMLAttributes: {
      class: "list-decimal my-0",
    },
  }),
  BulletList.configure({
    itemTypeName: 'listItem',
    HTMLAttributes: {
      class: "list-disc list-outside my-0",
    },
  }),
  Underline,
  Strike,
  Bold,
  Italic,
  DragAndDrop,
  PlaceholderExtension,
  Dropcursor.configure({
    width: 8,
    color: 'hsl(var(--border))',
    class: "rounded-lg"
  }),
  TaskList,
  TaskItem.configure({
    HTMLAttributes: {
      class: 'flex flex-row space-x-2 items-top',
    },
  })
]

export const defaultEditorProps = {
  attributes: {
    class:
    "border-input prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-8 focus:outline-none",
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
    <Card className="border-input w-full shadow-md">
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
      <SlashCommand char="/" >
        <Command className="rounded-lg border p-2 shadow-lg">
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Basic blocks">
              <CommandItem>
                <Calendar className="mr-2 size-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 size-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 size-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </SlashCommand>
      {children}
    </>
  )
}
