import React, { useState, useEffect } from "react"
import styles from "./Hero.module.css"

import pixelArt from '../../assets/Hero/placeholderProfile.png'


export const Hero = () => {
    return (
        <section id="hero" className={`${styles.container} pixelDots`}>
        <div className={styles.heroImageWrapper}>
                <svg className={styles.border} xmlns="http://www.w3.org/2000/svg">
                    <rect rx="4" ry="4" className={styles.borderRect} />
                </svg>
            <img 
                src={pixelArt}
                alt="Pixel art of me!"
                className={styles.heroImage}
            />        
        </div>   

        <div className={styles.heroText}>
            <h2>Hi, i'm</h2>
            <h1>
                Ivanna<br />Aleman<br />Coronado
                <span className={`${styles.deco} ${styles.deco1}`}>⌇</span>
                <span className={`${styles.deco} ${styles.deco2}`}>×</span>
                <span className={`${styles.deco} ${styles.deco3}`}>⟡</span>
                <span className={`${styles.deco} ${styles.deco4}`}>→</span>
                <span className={`${styles.deco} ${styles.deco5}`}>✩</span>
                <span className={`${styles.deco} ${styles.deco6}`}>←</span>
                <span className={`${styles.deco} ${styles.deco7}`}>∗</span>
            </h1>
            <h2>i’m a CS Student at the University of Texas at Austin!</h2>
            <div className={styles.heroButtons}>
                <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                    View my work!
                </button>
                <button onClick={() => window.open('/Ivanna-Aleman-Coronado-Resume.pdf', '_blank')}>
                    Download my resume
                </button>
            </div>
        </div>
        <div className={styles.scrollIndicator}>
            <span className={styles.scrollText}>scroll</span>
            <div className={styles.arrow} />
            <div className={styles.arrow} />
        </div>
        </section>
    );
}