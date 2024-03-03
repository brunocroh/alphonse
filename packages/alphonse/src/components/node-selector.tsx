import { Editor, useCurrentEditor } from "@tiptap/react"
import { Heading1, Heading2, Heading3, Text, TextQuote } from "lucide-react"

import { MenuSelect } from "./menu-bar"

export const nodes = [
  {
    name: "Text",
    icon: Text,
    isActive: (editor: Editor) => editor.isActive("paragraph") && !editor.isActive("blockquote"),
    toggle: (editor: Editor) =>
      editor.chain().focus().toggleNode("paragraph", "paragraph").run(),
  },
  {
    name: "Heading 1",
    icon: Heading1,
    isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
    toggle: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
  },
  {
    name: "Heading 2",
    icon: Heading2,
    isActive: (editor: Editor) => editor.isActive("heading", { level: 2 }),
    toggle: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
  },
  {
    name: "Heading 3",
    icon: Heading3,
    isActive: (editor: Editor) => editor.isActive("heading", { level: 3 }),
    toggle: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
  },
  {
    name: "Quote",
    icon: TextQuote,
    isActive: (editor: Editor) => editor.isActive("blockquote"),
    toggle: (editor: Editor) =>
      editor
        .chain()
        .focus()
        .toggleNode("paragraph", "paragraph")
        .toggleBlockquote()
        .run(),
  },
]

export function NodeSelector() {
  const { editor } = useCurrentEditor()

  if (!editor) return null

  const activeNode = nodes.find((node) => node.isActive(editor))

  return (
    <MenuSelect activeOption={activeNode?.name || "Change"}>
      {nodes.map((node) => (
        <div
          className="hover:bg-secondary flex flex-row items-center space-x-2 rounded-md px-2 py-1 hover:cursor-pointer"
          key={node.name}
          onClick={() => node.toggle(editor)}
        >
          <div className="text-primary bg-secondary border-secondary rounded-md p-1">
            <node.icon fill="currentColor" size={12} />
          </div>
          <span className="text-sm">{node.name}</span>
        </div>
      ))}
    </MenuSelect>
  )
}
