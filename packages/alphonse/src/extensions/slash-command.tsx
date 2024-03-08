import { PluginKey } from "@tiptap/pm/state";
import { useCurrentEditor } from "@tiptap/react";
import Suggestion, { SuggestionOptions } from "@tiptap/suggestion";
import { useEffect, useState } from "react";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

type SlashCommand = Omit<Optional<SuggestionOptions, 'editor'>, 'pluginKey' | 'element'> & {
  className?: string
  pluginKey: string
  children: React.ReactNode
}

export const SlashCommand = ({editor, className, children, pluginKey}: SlashCommand) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const {editor: currentEditor} = useCurrentEditor()

  useEffect(() => {
    if(!element) {
      return
    }

    const slashEditor = currentEditor || editor
    const slashPluginKey = new PluginKey(pluginKey || "slashCommand")

    if(!slashEditor) {
      console.warn('FloatingMenu component is not rendered inside of an editor component or does not have editor prop.')
      return
    }

    const plugin = Suggestion({
      pluginKey: slashPluginKey,
      editor: slashEditor,
    })

    slashEditor.registerPlugin(plugin)

    return () => slashEditor.unregisterPlugin(pluginKey)


  }, [currentEditor, editor, element, pluginKey])

  return <div ref={setElement} className={className}>
    {children}
  </div>

}
