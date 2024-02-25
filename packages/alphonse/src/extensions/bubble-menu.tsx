import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import { Button, Menubar, MenubarMenu, MenubarTrigger } from "@alphonse/ui";

type BubbleMenuProps = {
  editor: any;
};

export function BubbleMenu({ editor }: BubbleMenuProps) {
  if (!editor) return null;

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            Bold
          </MenubarTrigger>
          <MenubarTrigger
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            Italic
          </MenubarTrigger>

          <MenubarTrigger
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            Strike
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </TipTapBubbleMenu>
  );
}
