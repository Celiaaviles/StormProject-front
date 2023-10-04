import { Link, useParams } from 'react-router-dom';
import { useStorm } from '../../hooks/use.storm';

import styles from './storm.details.module.scss';

export default function StormDetails() {
  const { storms } = useStorm();
  const { id } = useParams();

  const storm = storms?.find((storm) => storm.id === id);

  return (
    <div className={styles.detailsdiv}>
      <img src={storm?.image.url} alt="Storm image." />
      <p className={styles.titledetail}>{storm?.title}</p>
      <div className={styles.infodiv}>
        <p className={styles.detailtext}>{storm?.description}</p>
        <p className={styles.detailtext}>{storm?.ubication}</p>
      </div>
      <Link
        className={styles.detailsLink}
        role="button"
        id="backButton"
        to={'/storms'}
      >
        Go Back
      </Link>
    </div>
  );
}
