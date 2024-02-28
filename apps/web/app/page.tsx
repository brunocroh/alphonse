/* eslint-disable no-undef */

import { Editor } from "./components/Editor";
import { ThemeSwitcher } from "../components/theme-switcher";

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="container screen-h-2xl min-h-screen max-w-screen-lg p-5">
      <header className="flex justify-between mb-5">
        <h1>Header</h1>
        <ThemeSwitcher />
      </header>
      <Editor />
    </main>
  );
}
