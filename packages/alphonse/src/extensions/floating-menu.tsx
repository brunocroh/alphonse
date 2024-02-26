import { FloatingMenu as TipTapFloatingMenu } from "@tiptap/react";
import { MenuBar } from "../components/menu-bar-";
import { MenuItem } from "../components/menu-item";

type FloatingMenuProps = {
  editor: any;
  className?: string;
};

export function FloatingMenu({ editor, className }: FloatingMenuProps) {
  if (!editor) return null;

  return (
    <TipTapFloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <MenuBar>
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
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          bullet list
        </MenuItem>
      </MenuBar>
    </TipTapFloatingMenu>
  );
}
