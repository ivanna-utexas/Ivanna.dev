import React, { useState, useEffect } from "react"
import styles from "./Contact.module.css"

import github from '../../assets/Contact/Github.svg'
import linkedln from '../../assets/Contact/linkedln.svg'


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
                        I'm currently open to new opportunities. Whether you have a project in mind, a question, or just want to say hi — my inbox is always open.
                    </p>
                </div>
                <button onClick={(e) => {
              e.preventDefault();
              copyToClipboard();
                }}>
                        Copy my email
                </button>
                {showCopied && (
                <div className={styles.copiedToast}>✓ Copied to clipboard!</div>
                )}
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
                    built by Ivanna Aleman-Coronado :) <br />
                    Art commisioned by Zypxel<br />
                    2026
                </p>
            </div>
        </section>
    );
}
    