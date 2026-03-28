import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiServer, FiLayout, FiDatabase, FiTool } from "react-icons/fi";
import "./Stack.css";

const stackData = [
  {
    id: "backend",
    title: "Backend",
    icon: <FiServer />,
    color: "#40A070",
    techs: [
      {
        name: "C#",
        icon: <i className="devicon-csharp-plain"></i>,
        desc: "My primary backend programming language. Used daily alongside Entity Framework Core, Dapper, and AutoMapper for solid architecture.",
      },
      {
        name: "Golang",
        icon: <i className="devicon-go-original-wordmark"></i>,
        desc: "Added to my stack to develop highly performant, concurrent backend applications and microservices.",
      },
      {
        name: "AWS SQS",
        icon: <i className="devicon-amazonwebservices-plain-wordmark"></i>,
        desc: "My first choice for a message queue due to its simplicity, reliability, and cost-effectiveness in cloud environments.",
      },
      {
        name: "RabbitMQ",
        icon: <i className="devicon-rabbitmq-plain"></i>,
        desc: "Extensive knowledge of building distributed systems utilizing RabbitMQ for robust message brokering.",
      },
      {
        name: "Apache Kafka",
        icon: <i className="devicon-apachekafka-original"></i>,
        desc: "Used for high-throughput, low-latency data streaming and handling complex asynchronous event-driven architectures.",
      },
      {
        name: "NUnit & xUnit",
        icon: <i className="devicon-dotnetcore-plain"></i>,
        desc: "Extensive experience ensuring the reliability of C# backend applications through rigorous unit testing using both NUnit and xUnit frameworks.",
      },
      {
        name: "Go Testing",
        icon: <i className="devicon-go-plain"></i>,
        desc: "Proficient in writing robust, automated tests utilizing Go's native testing package conventions to maintain code quality in microservices.",
      },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <FiLayout />,
    color: "#2E8055",
    techs: [
      {
        name: "JavaScript",
        icon: <i className="devicon-javascript-plain"></i>,
        desc: "One of the languages I have the most experience with. I use it naturally to build dynamic web applications.",
      },
      {
        name: "TypeScript",
        icon: <i className="devicon-typescript-plain"></i>,
        desc: "My preferred way to write JS. The strong typing provided a seamless transition from my C# background.",
      },
      {
        name: "React",
        icon: <i className="devicon-react-original"></i>,
        desc: "My main tool today for rapidly building modern, responsive, and complex user interfaces from scratch.",
      },
      {
        name: "Angular",
        icon: <i className="devicon-angularjs-plain"></i>,
        desc: "My framework of choice when architecting large-scale, strongly structured enterprise frontend applications.",
      },
      {
        name: "HTML & CSS",
        icon: <i className="devicon-html5-plain"></i>,
        desc: "Strong foundation in semantic elements and raw styling capabilities, allowing me to build deep custom layouts like this portfolio.",
      },
      {
        name: "Jest",
        icon: <i className="devicon-jest-plain"></i>,
        desc: "My go-to testing framework for JavaScript applications due to its speed, simplicity, and excellent coverage tools.",
      },
      {
        name: "Vitest",
        icon: <i className="devicon-vitest-plain"></i>,
        desc: "The blazing-fast modern standard for testing in Vite environments. I use it natively paired with React Testing Library to execute UI assertion suites seamlessly.",
      },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: <FiDatabase />,
    color: "#1c1c22",
    techs: [
      {
        name: "PostgreSQL",
        icon: <i className="devicon-postgresql-plain"></i>,
        desc: "My most used database in recent years. An incredibly robust open-source relational database that I rely on heavily.",
      },
      {
        name: "Oracle SQL",
        icon: <i className="devicon-oracle-original"></i>,
        desc: "Three years of experience querying and maintaining legacy systems relying on heavy Oracle databases.",
      },
      {
        name: "MySQL",
        icon: <i className="devicon-mysql-plain"></i>,
        desc: "Always my first choice for quick setups, studies, and lightweight application development.",
      },
      {
        name: "Redis",
        icon: <i className="devicon-redis-plain"></i>,
        desc: "Used primarily as a blazing-fast in-memory cache to exponentially increase API response speeds.",
      },
      {
        name: "MongoDB",
        icon: <i className="devicon-mongodb-plain"></i>,
        desc: "My preferred NoSQL database for managing unstructured data with impressive storage capacity and query speeds.",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: <FiTool />,
    color: "#40A070",
    techs: [
      {
        name: "Docker",
        icon: <i className="devicon-docker-plain"></i>,
        desc: "Changed the way I approach development. I use Docker and Docker Compose to assure environments behave identically everywhere.",
      },
      {
        name: "Git",
        icon: <i className="devicon-git-plain"></i>,
        desc: "I use Git so automatically now that I write most complex operational commands entirely from the terminal.",
      },
      {
        name: "GitHub Actions",
        icon: <i className="devicon-github-original"></i>,
        desc: "Used to build functional, automated CI/CD DevOps pipelines directly from repository events.",
      },
      {
        name: "Azure DevOps",
        icon: <i className="devicon-azuredevops-plain"></i>,
        desc: "The tool I use daily to manage sprint boards, track progress, and continuously deploy code safely.",
      },
      {
        name: "GitLab",
        icon: <i className="devicon-gitlab-plain"></i>,
        desc: "Also heavily experienced in navigating GitLab for version control and automated pipelines in enterprise scenarios.",
      },
    ],
  },
];

const Stack = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedCategory = selectedId ? stackData.find((c) => c.id === selectedId) : null;

  return (
    <div className="stack-page-container">
      <motion.div
        className="stack-header"
        initial={{ opacity: 1, y: 0, height: 'auto' }}
        animate={{ 
          opacity: selectedId ? 0 : 1, 
          y: selectedId ? -20 : 0, 
          height: selectedId ? 0 : 'auto', 
          overflow: 'hidden' 
        }}
        transition={{ duration: 0.3 }}
      >
        <h1>Tech Stack</h1>
        <p className="subtitle">
          The tools and technologies I use to build robust applications
        </p>
      </motion.div>

      <AnimatePresence>
        {!selectedId ? (
          <motion.div
            key="grid"
            className="stack-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {stackData.map((category) => (
              <motion.div
                key={category.id}
                layoutId={`card-container-${category.id}`}
                className="stack-category-card glass-panel"
                onClick={() => setSelectedId(category.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="category-icon"
                  layoutId={`icon-${category.id}`}
                >
                  {category.icon}
                </motion.div>
                <motion.h2 layoutId={`title-${category.id}`}>
                  {category.title}
                </motion.h2>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            className="stack-expanded-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            <motion.div
              layoutId={`card-container-${selectedCategory.id}`}
              className="stack-expanded-card glass-panel"
            >
              <div className="expanded-header">
                <button
                  className="back-btn"
                  onClick={() => setSelectedId(null)}
                >
                  <FiX /> Back to Categories
                </button>
                <div className="expanded-title-area">
                  <motion.div
                    className="category-icon small-icon"
                    layoutId={`icon-${selectedCategory.id}`}
                  >
                    {selectedCategory.icon}
                  </motion.div>
                  <motion.h2 layoutId={`title-${selectedCategory.id}`}>
                    {selectedCategory.title}
                  </motion.h2>
                </div>
              </div>

              <motion.div
                className="tech-grid"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                {selectedCategory.techs.map((tech, idx) => (
                  <div key={idx} className="tech-item-card glass-panel">
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-info">
                      <h3>{tech.name}</h3>
                      <p>{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stack;
