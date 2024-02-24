import "@alphonse/ui/globals.css";
import "./globals.css";

import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import React from "react";
import { Card, CardContent, CardHeader, Button } from "@alphonse/ui";
import { FloatingMenu, BubbleMenu } from "./extensions/index";

const AlchemyEditor = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });

  const [isEditable, setIsEditable] = React.useState(true);

  React.useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  return (
    <>
      <BubbleMenu editor={editor} />
      <FloatingMenu editor={editor} />
      <Card className="w-full">
        <CardHeader>
          <div>
            <input
              type="checkbox"
              checked={isEditable}
              onChange={() => setIsEditable(!isEditable)}
            />
            Editable
          </div>
        </CardHeader>
        <Button>Teste</Button>
        <CardContent>
          <EditorContent editor={editor} />
        </CardContent>
      </Card>
    </>
  );
};

export default AlchemyEditor;
