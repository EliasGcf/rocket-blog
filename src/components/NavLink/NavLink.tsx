import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './NavLink.module.scss';

const links = [
  { title: 'Home', href: '/' },
  { title: 'Sobre', href: '/about' },
  { title: 'Categorias', href: '/categories' },
  { title: 'Contato', href: '/contact' },
];

export function NavLink() {
  const router = useRouter();

  return (
    <nav className={styles.navLink}>
      {links.map((link) => (
        <Link key={link.title} href={link.href}>
          <a className={router.pathname === link.href ? styles.navLinkActive : ''}>
            {link.title}
          </a>
        </Link>
      ))}
    </nav>
  );
}
