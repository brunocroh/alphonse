import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";
import { MenuItem } from "../components/menu-item";
import { MenuBar } from "../components/menu-bar";
import { Separator } from "@alphonse/ui";

type BubbleMenuProps = {
  editor: any;
};

export function BubbleMenu({ editor }: BubbleMenuProps) {
  if (!editor) return null;

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <MenuBar>
        <MenuItem
          isActive={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold strokeWidth={3} size={12} />
        </MenuItem>
        <MenuItem
          isActive={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic strokeWidth={3} size={12} />
        </MenuItem>
        <MenuItem
          isActive={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough strokeWidth={3} size={12} />
        </MenuItem>
        <MenuItem
          isActive={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Underline strokeWidth={3} size={12} />
        </MenuItem>
      </MenuBar>
    </TipTapBubbleMenu>
  );
}
