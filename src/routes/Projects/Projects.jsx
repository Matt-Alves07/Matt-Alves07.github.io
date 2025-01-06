import styles from './Projects.module.css';
import ProjectsData from '../../data/Projects.json';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projects}>
        {ProjectsData.projects.map((project) => (
          <ProjectCard
            nome={project.nome}
            resumo={project.resumo}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects;