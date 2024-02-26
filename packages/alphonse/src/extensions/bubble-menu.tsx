import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";
import { Button, Menubar, MenubarMenu } from "@alphonse/ui";
import React from "react";
import { cn } from "@alphonse/ui";
import { Bold, Italic, Strikethrough, Underline } from "lucide-react";

type BubbleMenuProps = {
  editor: any;
};

type MenuItemProps = {
  isActive?: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

function MenuItem({
  isActive,
  onClick,
  className,
  children,
  ...props
}: MenuItemProps) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        isActive ? "text-destructive hover:text-destructive" : "",
        "p-2 h-8",
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

export function BubbleMenu({ editor }: BubbleMenuProps) {
  if (!editor) return null;

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Menubar className="space-x-0 p-0 h-8">
        <MenubarMenu>
          <MenuItem
            isActive={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <Bold size={12} />
          </MenuItem>
          <MenuItem
            isActive={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <Italic size={12} />
          </MenuItem>
          <MenuItem
            isActive={editor.isActive("strike")}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <Strikethrough size={12} />
          </MenuItem>
          <MenuItem
            isActive={editor.isActive("underline")}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <Underline size={12} />
          </MenuItem>
        </MenubarMenu>
      </Menubar>
    </TipTapBubbleMenu>
  );
}
