import { createPortal } from "react-dom";
import styles from "./ProjectPopup.module.css";

export default function ProjectPopup({ project, onClose }) {
    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.model} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close} onClick={onClose}>
                    <span />
                    <span />
                </button>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <h1>{project.title}</h1>
                        <div className={styles.preview}>
                            {project.PreviewType === "image" && (
                                <img src={project.PreviewSRC} alt="Preview" />
                            )}
                            {project.PreviewType === "iFrame" && (
                                <div className={styles.iframeWrapper}>
                                    <iframe
                                        src={project.PreviewSRC}
                                        title={project.title}
                                        loading="lazy"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                            {project.PreviewType === "video" && (
                                <video src={project.PreviewSRC} controls />
                            )}
                        </div>
                        <div className={styles.links}>
                            {project.GitHub && <a href={project.GitHub}>View Code</a>}
                            {project.FullScreen && <a href={project.FullScreen}>Demo!</a>}
                        </div>
                        <div className={styles.tags}>
                            <div className={styles.info}>
                                <h2>Language: </h2>
                                <p className={styles.tag}>{project.Language}</p>
                            </div> 
                            <div className={styles.info}>
                                <h2>Programs:</h2>
                                {project.Technology.map((tech, i) => (
                                    <li className={styles.tag} key={i}>
                                        {tech}
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                            <div className={styles.information}>
                                <h2>Background</h2>
                                <p>{project.Background}</p>
                                <h2>Focus</h2>
                                <p>{project.Focus}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}