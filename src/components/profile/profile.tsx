import { useEffect } from 'react';
import { useStorm } from '../../hooks/use.storm';
import { useUser } from '../../hooks/use.user';
import { Storm } from '../../model/storm.model';
import { StormCard } from '../storm/storm';
import styles from './profile.module.scss';

export default function Profile() {
  const { getStorms, storms } = useStorm();
  const { currentUser } = useUser();

  const userStorms = storms?.filter(
    (storm) => storm.owner.id === currentUser?.id
  );

  useEffect(() => {
    getStorms();
  }, [getStorms]);

  return (
    <div className={styles.profileStorms}>
      <h2 className={styles.title}>@{currentUser?.userName}'s Storms</h2>
      <span className={styles.subtitle}>
        Here are the storms you have created, you can edit or delete them
      </span>
      <ul className={styles.storms}>
        {userStorms?.map((item: Storm) => (
          <StormCard key={item.id} storm={item}></StormCard>
        ))}
      </ul>
    </div>
  );
}
