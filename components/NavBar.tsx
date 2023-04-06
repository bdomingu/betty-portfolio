import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
    label: string;
    href: string;
}



export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav>
        <button className={styles.menuButton} onClick={handleClick}>
          <span className={styles.hamburgerIcon}><FontAwesomeIcon icon={faBars} size='2xl'/></span>
        </button>
        <ul className={showMenu ? styles.menuListActive : styles.menuList}>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
}