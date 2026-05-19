import { useState } from "react";
import styles from "./ProjectCard.module.css";

import ProjectPopup from "./ProjectPopup";

export default function ProjectCard({ project }) {
    const [open, setOpen] = useState(false);

    return(
        <>
        <div className={styles.card} onClick={() => setOpen(true)}>
            <div className={styles.content}>
                <h1 className={styles.title}>{project.title}</h1>
                <img className={styles.thumbnail} src={project.thumbnail} alt={project.title} />
                <p>{project.Description}</p>
                <ul className={styles.technology}>
                    {project.Technology.map((tech, i) => (
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
        </>
    );
}