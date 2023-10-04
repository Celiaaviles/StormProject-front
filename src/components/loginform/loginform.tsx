import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/use.user';
import { Login } from '../../model/user.model';
import styles from './userform.module.scss';

export default function LoginForm() {
  const { loginUsers } = useUser();
  const navigate = useNavigate();
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const loginForm = ev.target as HTMLFormElement;

    const data: Login = {
      userName: (loginForm.elements.namedItem('userName') as HTMLInputElement)
        .value,
      passwd: (loginForm.elements.namedItem('passwd') as HTMLInputElement)
        .value,
    };

    loginUsers(data);
    navigate('/profile');
  };

  return (
    <>
      <form
        className={styles.userForm}
        aria-label="login"
        onSubmit={handleSubmit}
      >
        <legend className={styles.titleForm}>Login</legend>
        <input
          className={styles.formButton}
          type="textl"
          name="userName"
          placeholder="User name"
        />
        <input
          className={styles.formButton}
          type="password"
          name="passwd"
          placeholder="Password"
        />
        <button className={styles.submitButton} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
