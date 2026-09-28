import { useEffect, useRef } from "react";

import styles from "./Experience.module.css";
import { experienceData } from "../../data/Experience.js";

export const Experience = () => {
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return(
        <section className={`${styles.container} pixelDots`} id="experience">
            <h1 className={styles.title}>Experience</h1>
            <span className={`${styles.deco} ${styles.deco1}`}>⌇</span>
            <span className={`${styles.deco} ${styles.deco2}`}>⋯</span>
            <span className={`${styles.deco} ${styles.deco3}`}>✧</span>
            <span className={`${styles.deco} ${styles.deco4}`}>→</span>
            <div className={styles.timeline}>
                {experienceData.map((exp, i) => (
                    <div 
                        key={i} 
                        ref={(el) => (itemRefs.current[i] = el)}
                        className={`${styles.row} ${i % 2 === 0 ? styles.fromLeft : styles.fromRight}`}
                    >
                        <svg className={styles.dot} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="#9671DA" fillOpacity="0.3"/>
                            <circle cx="10" cy="10" r="4.5" fill="#9671DA" stroke="#6042AE"/>
                        </svg>
                        <div className={`${styles.entry} ${i % 2 === 0 ? styles.right : styles.left}`}>
                            <div className={styles.experience}>
                                <h2>{exp.date}</h2>
                                <h1>{exp.role}</h1>
                                <h3>
                                    {exp.company}
                                    <span style={{ margin: "0 0.5rem", opacity: 0.5 }}>|</span>
                                    {exp.location}
                                </h3>
                                <ul className={styles.bullets}>
                                    {exp.information.map((info, j) => (
                                        <li key={j}>{info}</li>
                                    ))}
                                </ul>
                                <div className={styles.tags}>
                                    {exp.skills.map((skill, j) => (
                                        <span className={styles.tag} key={j}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}