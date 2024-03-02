import { Editor, BubbleMenu as TipTapBubbleMenu } from "@tiptap/react"
import { Bold, Italic, Strikethrough, Underline } from "lucide-react"

import { Menu, MenuItem } from "../components/menu-bar"
import { Separator } from "@alphonse/ui"
import { NodeSelector } from "../components/node-selector"

type BubbleMenuProps = {
  editor?: Editor
}

export function BubbleMenu({ editor }: BubbleMenuProps) {
  if (!editor) return null

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100, moveTransition: "transform 0.15s ease-out", }}>
      <Menu>
        <NodeSelector />
        <Separator orientation="vertical"/>
        <MenuItem
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold strokeWidth={3} size={14} />
        </MenuItem>
        <MenuItem
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic strokeWidth={3} size={14} />
        </MenuItem>
        <MenuItem
          isActive={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline strokeWidth={3} size={14} />
        </MenuItem>
        <MenuItem
          isActive={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough strokeWidth={3} size={14} />
        </MenuItem>
      </Menu>
    </TipTapBubbleMenu>
  )
}
