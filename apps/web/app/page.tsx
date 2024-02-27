/* eslint-disable no-undef */

import { Editor } from "./components/Editor";
import { ThemeSwitcher } from "../components/theme-switcher";

export default async function Page(): JSX.Element {
  return (
    <main className="container p-2">
      <header className="flex justify-between mb-5">
        <h1>Header</h1>
        <ThemeSwitcher />
      </header>
      <Editor />
    </main>
  );
}
