import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="home-container glass-panel animate-fade-in"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="home-content">
        <motion.div className="profile-section" variants={itemVariants}>
          <div className="avatar-container">
            <img
              src="/profile_picture.jpg"
              alt="Matheus Alves"
              className="avatar"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <div className="avatar-glow"></div>
          </div>

          <div className="title-section">
            <h1 className="name">
              Hello, I'm <span className="highlight">Matheus Alves</span>
            </h1>
            <h2 className="role">Software Engineer</h2>

            <div className="social-links">
              <a
                href="https://github.com/Matt-Alves07"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/matheusalves07/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:matheus.alves523@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/5521992339161"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="about-section" variants={itemVariants}>
          <p className="lead-text">
            I'm glad for your visit, and I hope you find everything you need to
            know about me here!
          </p>
          <div className="text-blocks">
            <p>
              With a degree in Information Technology, a postgraduate degree in
              Software Engineering, and an AZ-900 Microsoft Azure certification,
              I have over seven years of experience in software development,
              always looking forward to building innovative and scalable solutions.
            </p>
            <p>
              My early career provided a strong foundation in relational
              databases, Object-Relational Mapping (ORM), and the Software
              Development Life Cycle (SDLC), equipping me with the essential
              knowledge to design solid software architectures and integrations.
            </p>
            <p>
              For over a year now, I have been exclusively focused on building
              Serverless applications using Azure Functions and the latest
              versions of the .NET ecosystem. Complemented by my experience
              with front-end frameworks like Angular and React, I am fully
              equipped to deliver high-quality, robust, full-stack tools.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
