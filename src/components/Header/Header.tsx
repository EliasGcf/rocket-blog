import { HeaderInput } from '@components/HeaderInput';
import { NavLink } from '@components/NavLink';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img src="/svg/logo.svg" alt="Rocket Blog" />
      <NavLink />
      <HeaderInput />
    </header>
  );
}
