import React from "react";
import { BubbleMenu as TipTapBubbleMenu } from "@tiptap/react";

type BubbleMenuProps = {
  editor: any;
};

export function BubbleMenu({ editor }: BubbleMenuProps) {
  if (!editor) return null;

  return (
    <TipTapBubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        strike
      </button>
    </TipTapBubbleMenu>
  );
}
