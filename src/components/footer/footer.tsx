import styles from './footer.module.scss';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <address className={styles.address}>
        <img
          className={styles.logofooter}
          src="../../../logo1.svg"
          alt="logo"
        />
        <span className={styles.spanfooter}>
          Capturing the Power and Beauty of Storms
        </span>
        <span className={styles.spanfooter}>Join our community</span>
        <div className={styles.socialIcons}>
          <a href="https://discord.me/stormserver" className={styles.a}>
            <img
              src="../../../DiscordLogo.webp"
              alt="discordLogo"
              className={styles.img}
            />
          </a>
          <a
            href="https://www.youtube.com/watch?v=mPZkdNFkNps"
            className={styles.a}
          >
            <img
              src="../../../YoutubeLogo.webp"
              alt="youtubeLogo"
              className={styles.img}
            />
          </a>
          <a
            href="https://twitter.com/ecazatormentas?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            className={styles.a}
          >
            <img
              src="../../../TwitterLogo.webp"
              alt="twitterLogo"
              className={styles.img}
            />
          </a>
          <a
            href="https://www.instagram.com/explore/tags/tormentas/?hl=es"
            className={styles.a}
          >
            <img
              src="../../../InstagramLogo.webp"
              alt="instagramLogo"
              className={styles.img}
            />
          </a>
        </div>
        <hr />
        <span className={styles.spanfootermarca}>Ⓒ STORM blog</span>
      </address>
    </footer>
  );
}
