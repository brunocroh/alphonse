/* eslint-disable no-undef */

import { Editor } from "./components/editor"
import { ThemeSwitcher } from "./components/theme-switcher"

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="screen-h-2xl container min-h-screen max-w-screen-lg  p-5">
      <header className="mb-5 flex justify-between">
        <h1>Header</h1>
        <ThemeSwitcher />
      </header>
      <Editor />
    </main>
  )
}
