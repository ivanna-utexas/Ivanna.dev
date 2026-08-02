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


                <p>I'm passionate about robotics, machine learning, and building 
                    software that works reliably in the real world. As an undergraduate 
                    researcher at UT's Autonomous Mobile Robotics Lab (AMRL), I built a 
                    full ROS 2 pipeline for a Boston Dynamics Spot choreography system — 
                    handling beat detection, a custom move library, and audio/motion sync, 
                    with driver-level debugging on a Jetson Orin. I've also worked on 
                    reinforcement learning for autonomous vehicles, training PPO agents 
                    in Unity with LLM-based reward scoring on TACC's HPC cluster, and 
                    developed anomaly-based ML models for cybersecurity at UT Dallas' 
                    StaRLiNG Lab. My coursework has taken me down to the systems level 
                    too, from writing a pipelined AArch64 processor emulator to building 
                    a cache simulator from scratch. I'm looking for SWE and robotics 
                    internships where I can bring that range — from low-level systems 
                    work to applied ML — to real engineering problems.
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