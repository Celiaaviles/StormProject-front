import { FiEdit2 } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStorm } from '../../hooks/use.storm';
import { useUser } from '../../hooks/use.user';
import { Storm } from '../../model/storm.model';
import styles from './storm.module.scss';

type Props = {
  storm: Storm;
};

export const StormCard = ({ storm }: Props) => {
  const location = useLocation();
  const { deleteStorms } = useStorm();
  const navigate = useNavigate();
  const { token } = useUser();
  const onClick = () => {
    deleteStorms(storm.id, token!);
    navigate('/storms');
  };

  return (
    <li className={styles.stormlist}>
      <Link to={`/storms/${storm.id}`}>
        <img
          className={styles.stormimage}
          src={storm.image?.url}
          alt="Storm image"
        />
      </Link>
      <div className={styles.stormInfo}>
        <span className={styles.stormtitle}>{storm.title}</span>
        <p className={styles.stormdescription}>{storm.description}</p>
        <span className={styles.ubication}>{storm.ubication}</span>
        {location.pathname === '/profile' && (
          <div className={styles.modifiers}>
            <Link className={styles.link} to={`/createstorm/${storm?.id}`}>
              <span className="edit">
                <FiEdit2 /> Edit
              </span>
            </Link>
            <span className={styles.delete} role="button" onClick={onClick}>
              <TiDeleteOutline />
              Delete
            </span>
          </div>
        )}
      </div>
    </li>
  );
};
