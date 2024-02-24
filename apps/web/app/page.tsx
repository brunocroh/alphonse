/* eslint-disable no-undef */
import Alphonse from "alphonse";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1>Alphonse Editor</h1>
      <Alphonse />
    </main>
  );
}
