import React, { useState, useEffect } from "react"
import styles from "./About.module.css"
import { skills } from "../../data/About"

import { useSlideIn } from "../../hooks/useSlideIn";

export const About = () => {
    const ref = useSlideIn();
    return(
        <section id="about" className={`${styles.container} pixelDots`}>
            <div ref={ref} className={`${styles.aboutText}`}>
                <h1>About</h1>
                <p>
                    I'm a computer science student at the University 
                    of Texas at Austin pursuing a B.S. in Computer 
                    Science with a minor in Robotics through the Robotics 
                    Honors Program. 
                </p>
                <span className={`${styles.deco} ${styles.deco1}`}>→</span>
                <span className={`${styles.deco} ${styles.deco2}`}>✩</span>
                <span className={`${styles.deco} ${styles.deco3}`}>≈</span>
                <span className={`${styles.deco} ${styles.deco4}`}>✦</span>


                <p>I'm passionate about machine learning, autonomous systems, 
                    and building impactful, human centered software solutions. 
                    My experience includes developing anomaly-based machine learning 
                    models for cybersecurity at UT Dallas' StaRLiNG Lab and creating 
                    educational software tools. Currently, I'm conducting research at the
                    UT Autonomous Mobile Robotics Lab (AMRL), working on autonomous vehicle 
                    systems with a focus on multi-sensor fusion using camera, LiDAR, 
                    and IMU data, as well as perception, planning, and control algorithms. 
                    I'm actively seeking opportunities where I can apply my technical skills 
                    to solve real-world problems and contribute to innovative projects.
                </p>
            </div>
            <div className={styles.aboutBubbles}>
                    {skills.map((group) => (
                <div key={group.category} className={styles.group}>
                    <h2 className={styles.category}>{group.category}</h2>
                    <div className={styles.tags}>
                        {group.items.map((item) => (
                            <span key={item} className={styles.tag}>{item}</span>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}