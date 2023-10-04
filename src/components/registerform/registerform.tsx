import { SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useUser } from '../../hooks/use.user';
import { UserNoId } from '../../model/user.model';
import styles from './userform.module.scss';

export default function RegisterForm() {
  const { registerUsers } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const registerForm = ev.target as HTMLFormElement;
    const data: Partial<UserNoId> = {
      userName: (
        registerForm.elements.namedItem('userName') as HTMLInputElement
      ).value,
      passwd: (registerForm.elements.namedItem('passwd') as HTMLInputElement)
        .value,
      email: (registerForm.elements.namedItem('email') as HTMLInputElement)
        .value,
    };

    if (data.userName === '' || data.passwd === '' || data.email === '') {
      Swal.fire({
        width: '35em',
        icon: 'error',
        title: 'ERROR',
        text: 'Please fill in all fields',
        background: '#3b3b3b',
        color: '#ffffff',
        iconColor: '#c57642',
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
      });
    } else {
      registerUsers(data);
      registerForm.reset();
      Swal.fire({
        width: '35em',
        background: '#3b3b3b',
        color: '#ffffff',
        iconColor: '#c57642',
        position: 'top-end',
        icon: 'success',
        title: 'Now you can login!',
        showConfirmButton: false,
        timer: 4000,
      });
      navigate('/login');
    }

    registerUsers(data);
    registerForm.reset();
  };

  return (
    <>
      <form
        className={styles.userForm}
        aria-label="login"
        onSubmit={handleSubmit}
      >
        <legend className={styles.titleForm}>Create account</legend>
        <span className={styles.spanForm}>
          Welcome! enter your details and start creating, collecting and share
          storms.
        </span>
        <input
          className={styles.formButton}
          type="text"
          name="userName"
          placeholder="User name"
        />
        <input
          className={styles.formButton}
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className={styles.formButton}
          type="text"
          name="city"
          placeholder="City"
        />
        <input
          className={styles.formButton}
          type="password"
          name="passwd"
          placeholder="Password"
        />
        <button className={styles.submitButton} type="submit">
          Create account
        </button>
      </form>
    </>
  );
}
