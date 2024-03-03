/* eslint-disable no-undef */

import { Editor } from "./components/alphonse-editor"
import { GithubButton } from "./components/github-button"
import { ThemeSwitcher } from "./components/theme-switcher"

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="screen-h-2xl container min-h-screen max-w-screen-lg  p-5">
      <header className="mb-5 flex justify-between">
        <h1>Header</h1>
        <div className="space-x-2">
          <ThemeSwitcher />
          <GithubButton />
        </div>
      </header>
      <Editor />
    </main>
  )
}
