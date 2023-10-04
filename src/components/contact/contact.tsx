import { Link } from 'react-router-dom';
import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contactdiv}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <p>
        Welcome to the website dedicated to sharing beautiful photos of storms!
        Here, you will find stunning images of lightning, clouds, rain, and wind
        captured by experienced storm photographers from around the world. Our
        team of photographers uses the best settings and tools to shoot and edit
        lightning images and other extreme weather photos
      </p>
      <p className={styles.contactp}>
        We hope you enjoy browsing through our gallery of storm photos. If you
        have any questions or comments, please feel free to contact us.
      </p>

      <img
        className={styles.contactimg}
        src="../../../desert-storm-2022-11-11-08-53-44-utc_11zon.webp"
        alt="picture of a beautiful storm."
      />
      <Link className={styles.linkregister} to={'/register'}>
        Join our community and start share your pictures
      </Link>
      <span className={styles.contactspan}>
        Phone: +34 675322622 | Mail: stormsblog@storm.com
      </span>
    </div>
  );
}
