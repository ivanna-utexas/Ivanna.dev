import { useState, useEffect, useRef } from "react";
import styles from "./ProjectCard.module.css";

import ProjectPopup from "./ProjectPopup";

export default function ProjectCard({ project, index }) {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return(
        <>
        <div 
            ref={ref}
            className={`${styles.cardWrapper} ${visible ? styles.visible : ""}`} 
            style={{ animationDelay: `${index * 0.5}s` }}
        >
            <div className={styles.card} onClick={() => setOpen(true)}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <img className={styles.thumbnail} src={project.thumbnail} alt={project.title} />
                    <p>{project.Description}</p>
                    <ul className={styles.technology}>
                        {project.Technology && project.Technology.map((tech, i) => (
                            <li className={styles.tech} key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
                    {open && (
                    <ProjectPopup
                        className={styles.open}
                        project={project}
                        onClose={() => setOpen(false)}
                    />
                    )}
            </div>
        </div>
        </>
    );
}