import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import AboutContent from "../components/AboutContent";
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

        <AboutContent isHome={true} />
      </div>
    </motion.div>
  );
};

export default Home;
