import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}></div>

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

