import { PluginKey } from "@tiptap/pm/state";
import { useCurrentEditor } from "@tiptap/react";
import Suggestion, { SuggestionMatch, SuggestionOptions, Trigger } from "@tiptap/suggestion";
import { useEffect, useState } from "react";

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>

type SlashCommand = Omit<Optional<SuggestionOptions, 'editor'>, 'pluginKey' | 'element'> & {
  className?: string
  pluginKey?: string
  children: React.ReactNode
}

export const SlashCommand = ({editor, className, children, pluginKey, char}: SlashCommand) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null)
  const {editor: currentEditor} = useCurrentEditor()
  const [visibility, setVisibility] = useState(false)

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
      char,
      command: (props) => {
        console.log({props})
        console.log("WORKS?")
      },
     render: () => {
        // Optional: Implement custom rendering of the suggestion list.
        let reactRenderer: any = null;
        return {
          onStart: () => {
            console.log('start')
            setVisibility(true)
          },
          onUpdate: () => {
            console.log('update')
            reactRenderer.textContent = "Updated...";
            // Update rendering based on props.items or props.query
          },
          onKeyDown: () => {
            console.log('keydown')
            // Handle key down events, e.g., for custom navigation
            return false; // Return true if the event is handled
          },
          onExit: () => {
            console.log('exit')
            setVisibility(false)
          },
        };
      }

    })

    slashEditor.registerPlugin(plugin)

    return () => slashEditor.unregisterPlugin(slashPluginKey)


  }, [char, currentEditor, editor, element, pluginKey])

  return <div ref={setElement} className={className} style={{ display: visibility ? 'block': 'none' }}>
    {children}
  </div>

}
