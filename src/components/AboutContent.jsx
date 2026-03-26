import { motion } from "framer-motion";
import "./AboutContent.css";

const AboutContent = ({ isHome = false }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div className="about-section" variants={itemVariants}>
      {isHome && (
        <p className="lead-text">
          I'm glad for your visit, and I hope you find everything you need to know about me here!
        </p>
      )}
      <div className="text-blocks">
        <p>
          With a degree in Information Technology, a postgraduate degree in
          Software Engineering, and an AZ-900 Microsoft Azure certification, I
          have over seven years of experience in software development, always
          looking forward to building innovative and scalable solutions.
        </p>
        <p>
          My early career provided a strong foundation in relational databases,
          Object-Relational Mapping (ORM), and the Software Development Life
          Cycle (SDLC), equipping me with the essential knowledge to design
          solid software architectures and integrations.
        </p>
        <p>
          For over a year now, I have been exclusively focused on building
          Serverless applications using Azure Functions and the latest versions
          of the .NET ecosystem. Complemented by my experience with front-end
          frameworks like Angular and React, I am fully equipped to deliver
          high-quality, robust, full-stack tools.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutContent;
