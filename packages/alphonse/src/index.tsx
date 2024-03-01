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
import { EditorContent, useEditor } from "@tiptap/react"

import { BubbleMenu, FloatingMenu } from "./extensions/index"

const AlchemyEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Underline,
      Strike,
      Bold,
      Italic,
    ],
    editorProps: {
      attributes: {
        class:
          "border-input prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  })

  const [isEditable, setIsEditable] = React.useState(true)

  React.useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <>
      <BubbleMenu editor={editor} />
      <FloatingMenu editor={editor} />
      <Card className="w-full border-input">
        <CardHeader>
          <div>
            <input
              type="checkbox"
              checked={isEditable}
              onChange={() => setIsEditable(!isEditable)}
            />
            Editable
          </div>
        </CardHeader>
        <CardContent>
          <EditorContent editor={editor} />
        </CardContent>
      </Card>
    </>
  )
}

export default AlchemyEditor
