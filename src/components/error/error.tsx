import styles from './error.module.scss';
export default function ErrorPage() {
  return (
    <main className={styles.error}>
      <span className={styles.text}>Error 404</span>
      <div className={styles.errortext}>
        <span className={styles.text}>Go</span>
        <a href="/home" className={styles.aHome}>
          HOME
        </a>
      </div>
    </main>
  );
}
