import { NavLink } from '@components/NavLink';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/svg/logo.svg" alt="Rocket Blog" />

      <NavLink />

      <div className={styles.inputContainer}>
        <input type="text" placeholder="Buscar" />
        <button type="button">
          <img src="/svg/search.svg" alt="Buscar" />
        </button>
      </div>
    </header>
  );
}
