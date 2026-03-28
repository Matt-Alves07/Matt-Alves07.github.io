import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import './Projects.css';

const featuredProject = {
  name: 'Portfolio',
  repoName: 'Matt-Alves07.github.io',
  description: 'The very portfolio you are browsing right now! Built from scratch with a heavy focus on premium UI/UX, Glassmorphism design aesthetics, and fluid layout animations. It serves as my definitive professional presentation card.',
  tags: ['React', 'Vite', 'Framer Motion', 'Vanilla CSS'],
  github: 'https://github.com/Matt-Alves07/Matt-Alves07.github.io'
};

const projectsData = [
  {
    name: 'Lanches MVC',
    description: 'A robust web application utilizing the MVC pattern for managing and ordering snacks, with strongly typed backend logic.',
    tags: ['C#', '.NET', 'MVC'],
    github: 'https://github.com/Matt-Alves07/LanchesMVC'
  },
  {
    name: 'Clean Catalog',
    description: 'An API catalog project implementing Clean Architecture principles to ensure high maintainability and decoupled code.',
    tags: ['C#', '.NET', 'Clean Architecture'],
    github: 'https://github.com/Matt-Alves07/CleanCatalog'
  },
  {
    name: 'Go Toolkit',
    description: 'A collection of reusable tools and standard utilities built in Golang to accelerate concurrent backend development.',
    tags: ['Golang', 'Backend', 'Tooling'],
    github: 'https://github.com/Matt-Alves07/go-toolkit'
  },
  {
    name: 'TypeScript Express',
    description: 'A fully-featured strict backend API template built with Express.js leveraging the power and safety of TypeScript.',
    tags: ['TypeScript', 'Node.js', 'Express'],
    github: 'https://github.com/Matt-Alves07/TypeScriptExpress'
  },
  {
    name: 'Angular Weather App',
    description: 'A frontend application built with Angular that consumes external weather APIs to display real-time climate data.',
    tags: ['Angular', 'TypeScript', 'API Integration'],
    github: 'https://github.com/Matt-Alves07/AngularWeatherApp'
  },
  {
    name: 'Angular Stock Management',
    description: 'An enterprise-level dashboard interface for managing and tracking inventory and stock movements.',
    tags: ['Angular', 'TypeScript', 'Dashboard'],
    github: 'https://github.com/Matt-Alves07/AngularStockManagement'
  },
  {
    name: 'Angular RxJS with Jest',
    description: 'Advanced frontend project demonstrating deep reactive programming with RxJS and rigorous unit testing using Jest.',
    tags: ['Angular', 'RxJS', 'Jest'],
    github: 'https://github.com/Matt-Alves07/AngularRxJsWithJest'
  },
  {
    name: 'React To-Do App',
    description: 'A fast, responsive, and state-driven task management application built entirely with modern React.',
    tags: ['React', 'JavaScript', 'State Management'],
    github: 'https://github.com/Matt-Alves07/ToDoReactApp'
  },
  {
    name: 'Pokédex Explorer',
    description: 'A classic frontend project consuming the official PokéAPI to list, filter, and display Pokémon data dynamically.',
    tags: ['JavaScript', 'Frontend', 'REST API'],
    github: 'https://github.com/Matt-Alves07/Pokedex-project'
  },
  {
    name: 'API with Express',
    description: 'A lightweight and fast RESTful API built natively with Express to handle backend routing and data delivery.',
    tags: ['JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com/Matt-Alves07/APIWithExpress'
  },
  {
    name: 'Task Control',
    description: 'A backend-driven task management system enforcing business rules and efficient data persistence.',
    tags: ['C#', '.NET', 'Backend'],
    github: 'https://github.com/Matt-Alves07/TaskControl'
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className="projects-page-container animate-fade-in"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="subtitle">My open-source work, personal experiments, and repositories</p>
      </div>

      <motion.div className="featured-project glass-panel" variants={itemVariants}>
        <div className="featured-badge">
          <FiStar /> Featured Highlight
        </div>
        <div className="featured-content">
          <h2>{featuredProject.name}</h2>
          <p>{featuredProject.description}</p>
          <div className="tech-tags">
            {featuredProject.tags.map(tag => (
              <span key={tag} className="tag featured-tag">{tag}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn primary-btn">
              <FiGithub /> View Source Code
            </a>
          </div>
        </div>
      </motion.div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <motion.div 
            key={idx} 
            className="project-card glass-panel"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-footer">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="repo-link">
                <FiGithub /> Repository
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
