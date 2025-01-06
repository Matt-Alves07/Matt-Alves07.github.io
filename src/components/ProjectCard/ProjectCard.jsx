import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ nome, resumo, link }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div className={styles.card}>
            <h3>{nome}</h3>
            <p>{resumo}</p>
            <button className={styles.button} onClick={handleClick}>See project's repository</button>
        </div>
    )
}

export default ProjectCard;