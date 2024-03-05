import { Editor, useCurrentEditor } from "@tiptap/react"
import { Check, CheckSquare, CheckSquare2, Heading1, Heading2, Heading3, List, ListOrdered, Text, TextQuote } from "lucide-react"

import { MenuSelect } from "./menu-bar"

export const nodes = [
  {
    name: "Text",
    icon: Text,
    isActive: (editor: Editor) =>
      editor.isActive("paragraph") &&
      !editor.isActive("blockquote") &&
      !editor.isActive("bulletList") &&
      !editor.isActive("orderedList"),
    toggle: (editor: Editor) =>
      editor.chain().focus().unsetBlockquote().toggleNode("paragraph", "paragraph").run(),
  },
  {
    name: "Heading 1",
    icon: Heading1,
    isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
    toggle: (editor: Editor) =>
      editor.chain().focus().unsetBlockquote().toggleHeading({ level: 1 }).run(),
  },
  {
    name: "Heading 2",
    icon: Heading2,
    isActive: (editor: Editor) => editor.isActive("heading", { level: 2 }),
    toggle: (editor: Editor) =>
      editor.chain().focus().unsetBlockquote().toggleHeading({ level: 2 }).run(),
  },
  {
    name: "Heading 3",
    icon: Heading3,
    isActive: (editor: Editor) => editor.isActive("heading", { level: 3 }),
    toggle: (editor: Editor) =>
      editor.chain().focus().unsetBlockquote().toggleHeading({ level: 3 }).run(),
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
  {
    name: "Ordered List",
    icon: ListOrdered,
    isActive: (editor: Editor) => editor.isActive("orderedList"),
    toggle: (editor: Editor) =>
      editor.chain().focus().clearNodes().toggleOrderedList().run(),
  },
  {
    name: "Bullet List",
    icon: List,
    isActive: (editor: Editor) => editor.isActive("bulletList"),
    toggle: (editor: Editor) => editor.chain().focus().clearNodes().toggleBulletList().run(),
  },
  {
    name: "To-do list",
    icon: CheckSquare,
    isActive: (editor: Editor) => editor.isActive("taskItem"),
    toggle: (editor: Editor) => editor.chain().focus().clearNodes().toggleTaskList().run(),
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
          className="hover:bg-secondary flex flex-row items-center justify-between  rounded-md px-2 py-1 hover:cursor-pointer"
          key={node.name}
          onClick={() => node.toggle(editor)}
        >
          <div className="flex flex-row space-x-2">
            <div className="text-primary bg-secondary border-secondary rounded-md p-1">
              <node.icon stroke="currentColor" size={12} />
            </div>
            <span className="text-sm">{node.name}</span>
          </div>
          <div>
            {node.isActive(editor) && <Check size={14} />}
          </div>
        </div>
      ))}
    </MenuSelect>
  )
}
