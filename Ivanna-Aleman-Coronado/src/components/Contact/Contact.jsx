import React, { useState, useEffect } from "react"
import styles from "./Contact.module.css"

import github from '../../assets/Contact/Github.svg'
import linkedln from '../../assets/Contact/Linkedln.svg'


export const Contact = () => {
    const [showCopied, setShowCopied] = useState(false);

    const copyToClipboard = () => {
        const email = "ivannaalemancoronado3@gmail.com";

        navigator.clipboard.writeText(email);
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
    };

    return(
        <section id="contact" className={`${styles.container} pixelDots`}>
            <div className={styles.contact}>
                <div className={styles.contactText}>
                    <h1>Contact me!</h1>
                    <p>
                        I'm currently open to Software Engineering and robotics internships for Summer 2027. Whether you have a role in mind, a question about my work, or just want 
                        to say hi, my inbox is always open!
                    </p>
                </div>
                <div className={styles.buttons}>
                    <button onClick={(e) => {
                        e.preventDefault();
                        copyToClipboard();
                        }}>
                                Copy my email
                        </button>
                        {showCopied && (
                        <div className={styles.copiedToast}>✓ Copied to clipboard!</div>
                        )}
                    <button onClick={() => window.open('/Ivanna-Aleman-Coronado-Resume.pdf', '_blank')}>
                        Download my resume
                    </button>
                </div>
                
                <div className={styles.links}>
                    <a href="https://github.com/ivanna-utexas" target="_blank" rel="noreferrer" className={styles.link}>
                        <svg className={styles.border} xmlns="http://www.w3.org/2000/svg">
                            <rect rx="4" ry="4" className={styles.borderRect} />
                        </svg>
                        <img src={github} alt="My Github" className={styles.icon} />
                        <h2>Github</h2>
                    </a>
                    <a href="https://www.linkedin.com/in/ivanna-aleman-coronado-50b805384/" target="_blank" rel="noreferrer" className={styles.link}>
                        <svg className={styles.border} xmlns="http://www.w3.org/2000/svg">
                            <rect rx="4" ry="4" className={styles.borderRect} />
                        </svg>
                        <img src={linkedln} alt="My Github" className={styles.icon} />
                        <h2>Linkedln</h2>
                    </a>
                </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.credits}>
                <p>
                    Made with love, Ivanna Aleman-Coronado :)
                </p>
                <a href="https://www.etsy.com/shop/Zypxel?msockid=1c0f99c1dd846a6901538ee8dc216b70">Art commissioed by Zypxel</a>
            </div>
        </section>
    );
}
    