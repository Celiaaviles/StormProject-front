/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/use.user';
import style from './header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, logoutUsers } = useUser();

  return (
    <>
      <nav className={style['nav-container']}>
        <main>
          <Link to={'/'}>
            <img src="../../../logo1.svg" alt="STORM logo" />
          </Link>

          <ul style={isMenuOpen ? { right: '0%' } : { right: '-150%' }}>
            <li>
              <Link className={style.link} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/storms">
                Storms
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link className={style.link} to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className={style.link} to="/createstorm">
                    Create Storm
                  </Link>
                </li>
                <li className={style.login} onClick={logoutUsers}>
                  <a className={style.login} href="/">
                    Logout
                  </a>
                  <FaUser />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className={style.link} to="/register">
                    Register
                  </Link>
                </li>
                <li className={style.login}>
                  <Link className={style.login} to="/login">
                    Login
                  </Link>
                  <FaUser />
                </li>
              </>
            )}
          </ul>
          <section
            className={style.menu}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            role="button"
            aria-label="button"
          >
            {isMenuOpen ? <HiOutlineMenuAlt2 /> : <HiOutlineMenuAlt3 />}
          </section>
        </main>
      </nav>
    </>
  );
}
