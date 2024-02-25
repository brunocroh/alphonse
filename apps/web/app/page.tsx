/* eslint-disable no-undef */
import "alphonse/dist/index.css";
import { Editor } from "./components/Editor";

export default async function Page(): JSX.Element {
  return (
    <main className="container p-2">
      <header>
        <h1>Header</h1>
      </header>
      <Editor />
    </main>
  );
}
