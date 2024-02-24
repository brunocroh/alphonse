/* eslint-disable no-undef */
import "alphonse/dist/index.css";
import styles from "./page.module.css";
import { Editor } from "./components/Editor";

export default async function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>
        <div>Teste da minha tela</div>
      </h1>
      <Editor />
    </main>
  );
}
