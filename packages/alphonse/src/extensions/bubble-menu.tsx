import { Editor, BubbleMenu as TipTapBubbleMenu } from "@tiptap/react"
import { Bold, Italic, Strikethrough, Underline } from "lucide-react"

import { Menu, MenuSelect, MenuItem } from "../components/menu-bar"
import { useMemo } from "react"

type BubbleMenuProps = {
  editor?: Editor
}

export function BubbleMenu({ editor }: BubbleMenuProps) {

  const activeExtension = () => {

  }

  const availableExtensions = useMemo(() => {
    if(!editor) return []
    return editor.extensionManager.extensions
      .filter(extension => extension.type === 'node')
      .map(nodeExtension => nodeExtension.name);

  }, [editor?.extensionManager?.extensions])

  if (!editor) return null

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Menu>
        <MenuSelect options={availableExtensions} activeOption={'Paragraph'} />
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
