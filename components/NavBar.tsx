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
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <a href="/">
            <img 
            className={styles.logo} 
            src='/images/initials.png' alt="Logo"
            width={150}
            height={50}/></a>
        </div>
        <button className={styles.menuButton} onClick={handleClick}>
          <span className={styles.hamburgerIcon}><FontAwesomeIcon icon={faBars} size='2xl'/></span>
        </button>
        
        <ul className={showMenu ? styles.menuListActive : styles.menuList}>
        <div className={styles.navContainer}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>          
          <li><Link href="/resume">Resume</Link></li> 
          <li><Link href="/contact">Contact</Link></li>          
         
      </div>
        </ul>
        
        
      
      </nav>
    );
}