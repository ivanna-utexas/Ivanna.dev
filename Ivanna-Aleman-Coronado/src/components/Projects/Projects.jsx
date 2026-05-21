import { useState, useEffect } from "react";

import styles from "./Projects.module.css";
import { projects } from "../../data/Projects.js";
import ProjectCard from "./ProjectCard";

export const Projects = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 },
        );
        document
          .querySelectorAll(`.${styles.slideIn}`)
          .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return(
        <section className={`${styles.container} pixelDots`} id="projects">
            <h1 className={styles.title}>Projects</h1>
            <span className={`${styles.deco} ${styles.deco1}`}>✦</span>
            <span className={`${styles.deco} ${styles.deco2}`}>•</span>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};