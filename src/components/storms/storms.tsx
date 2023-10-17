import { SyntheticEvent, useEffect } from 'react';
import { useStorm } from '../../hooks/use.storm';
import { Storm } from '../../model/storm.model';
import { StormCard } from '../storm/storm';
import styles from './storms.module.scss';

export default function Storms() {
  const { getStorms, storms, ubication } = useStorm();

  useEffect(() => {
    getStorms();
  }, [getStorms]);

  const handleUbication = (ev: SyntheticEvent) => {
    const selectedUbication = (ev.target as HTMLSelectElement).value;
    console.log(selectedUbication);
    ubication(selectedUbication);
  };

  return (
    <div className={styles.stormsMainList}>
      <h2 className={styles.title}>Storms</h2>
      <span className={styles.subtitle}>
        Check out our gallery and enjoy the greatest pictures around the world!
      </span>
      <nav className={styles.selectcontinent}>
        <select
          onChange={handleUbication}
          className={styles.selectregion}
          defaultValue="See All"
          name="region"
          id="region-select"
        >
          <option value="" disabled>
            Select Region
          </option>
          <option value="See All">See All</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </nav>
      <ul className={styles.storms}>
        {storms?.map((item: Storm) => (
          <StormCard key={item.id} storm={item}></StormCard>
        ))}
      </ul>
    </div>
  );
}
