import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.h1}>
        <a href="https://aframe.io/">
          <b>V</b>ercel
        </a>
        •
        <a href="https://aframe.io/">
          <b> A</b>-Frame
        </a>
        •
        <a href="https://nextjs.org">
          <b> N</b>ext.js
        </a>
        •
        <a href="https://www.typescriptlang.org">
          <b> T</b>ype<b>S</b>cript
        </a>
      </div>
      <div className={styles.description}>
        Click the link below to see an example 3D scene. Move with WASD keys and
        mouse, or use VR headset.
      </div>
      <div className={styles.grid}>
        <a
          href="/HelloWorld"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            HelloWorld <span>-&gt;</span>
          </h2>
          <p>A basic A-Frame example.</p>
        </a>
      </div>
    </main>
  );
}
