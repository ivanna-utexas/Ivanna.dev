import React, { useState, useEffect } from "react"
import styles from "./NavBar.module.css"

import profile from '../../assets/NavBar/profile.svg'

export const NavBar = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [visible, setVisible] = useState(false);
    const links = ["about", "projects", "experience", "contact"];
    
    useEffect(() => {
        // trigger entrance animation on load
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <nav className={styles.nav}>
            <div className={styles.navInner}>
                <a href='#hero'>
                    <img 
                    src={profile}
                    alt="Ivanna Aleman-Coronado"
                    className={styles.profile}
                    />
                </a>
                <button
                    className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    >
                    <span />
                    <span />
                    <span />
                </button>
                <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ""}`}>
                {links.map((link, i) => (
                    <li key={link} style={{ '--i': i }}>
                    <a
                        href={`#${link}`}
                        className={`${styles.navLink} ${visible ? styles.navLinkVisible : ""} ${activeSection === link ? styles.active : ""}`}
                        onClick={() => {
                            setMenuOpen(false)
                            setActiveSection(link);
                        }}
                    >
                        {link}
                    </a>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
}