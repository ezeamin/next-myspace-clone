import Link from 'next/link';
import Image from 'next/image';

import styles from './NavMenu.module.css';

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <Image
          src='/logo.svg'
          width={216}
          height={30}
          alt='MySpace Clone Logo'
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
