import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import {
  Button,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  Separator,
} from "@alphonse/ui";

type BubbleMenuProps = {
  editor: any;
};

export function BubbleMenu({ editor }: BubbleMenuProps) {
  if (!editor) return null;

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Menubar className="space-x-0 p-0 h-8">
        <MenubarMenu>
          <Button
            variant="ghost"
            className="p-2 h-8"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            B
          </Button>
          <Button
            variant="ghost"
            className="p-2 h-8"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            I
          </Button>
          <Button
            variant="ghost"
            className="p-2 h-8"
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            S
          </Button>
          <Button
            variant="ghost"
            className="p-2 h-8"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            U
          </Button>
        </MenubarMenu>
      </Menubar>
    </TipTapBubbleMenu>
  );
}
