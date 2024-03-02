import { FloatingMenu as TipTapFloatingMenu } from "@tiptap/react"

import { Menu, MenuItem } from "../components/menu-bar"

type FloatingMenuProps = {
  editor: any
}

export function FloatingMenu({ editor }: FloatingMenuProps) {
  if (!editor) return null

  return (
    <TipTapFloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Menu>
        <MenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          h1
        </MenuItem>
        <MenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          h2
        </MenuItem>
        <MenuItem
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          h3
        </MenuItem>
        <MenuItem
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          bullet list
        </MenuItem>
      </Menu>
    </TipTapFloatingMenu>
  )
}
