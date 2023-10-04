import { Link } from 'react-router-dom';
import styles from './home.module.scss';
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <hgroup>
          <h1 className={styles.h1}>
            Capturing the Power and Beauty of Storms
          </h1>
          <h2 className={styles.h2}>
            This blog is dedicated to sharing stunning photos of storms, with a
            community of storm photographers
          </h2>
        </hgroup>
        <div className={styles.postHome}>
          <img
            className={styles.imgTwo}
            src="../../../big-lightning-strikes-the-ground-at-night-2022-09-01-21-36-46-utc_11zon_11zon.webp"
            alt="portada de ejemplo de post"
          />
        </div>
        <Link to={'/register'} className={styles.homeButton}>
          Get started
        </Link>
        <hgroup>
          <h3 className={styles.h1}>How it works</h3>
          <h4 className={styles.h2}>Find out how to get started</h4>
        </hgroup>
        <article>
          <img
            className={styles.imgs}
            src="../../../works1.webp"
            alt="works1"
          />
          <div className={styles.text}>
            <span>Chase a storm</span>
            <p>
              Make sure to use a camera with a good quality lens and settings
              that are appropriate for the lighting conditions.
            </p>
          </div>
        </article>
        <article>
          <img
            className={styles.imgs}
            src="../../../works2.webp"
            alt="works2"
          />
          <div className={styles.text}>
            <span>Create an account</span>
            <p>
              This involves providing your name, email address, a username and
              password.
            </p>
          </div>
        </article>
        <article>
          <img
            className={styles.imgs}
            src="../../../works3.webp"
            alt="works3"
          />
          <div className={styles.text}>
            <span>Start sharing</span>
            <p>
              Now you can share your storm photos with others. Select a great
              picture and click in update!
            </p>
          </div>
        </article>
      </main>
    </>
  );
}
