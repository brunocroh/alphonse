/* eslint-disable no-undef */
import "alphonse/dist/index.css";
import styles from "./page.module.css";
import { Editor } from "./components/Editor";

export default async function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className="container w-full">
        <header>
          <h1>Header</h1>
        </header>
        <Editor />
      </div>
    </main>
  );
}
