import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaStar,
  FaLaptopCode,
  FaAngleDoubleUp,
} from "react-icons/fa";
import "./Experience.css";

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  
  if (text.length <= maxLength) return <p>{text}</p>;
  
  const displayText = isExpanded ? text : text.substring(0, maxLength) + "...";
  
  return (
    <p>
      {displayText}
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="read-more-btn"
      >
        {isExpanded ? " Show less" : " Read more"}
      </button>
    </p>
  );
};

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  // Glassmorphism default styles for timeline cards
  const glassStyle = {
    background: "var(--bg-secondary)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--border-color)",
    borderRadius: "16px",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.3)",
    color: "var(--text-primary)",
  };

  const glassArrowStyle = {
    borderRight: "7px solid var(--bg-secondary)",
  };

  const greenIcon = { background: "var(--accent-color)", color: "#fff" };
  const darkIcon = {
    background: "#1c1c22",
    color: "var(--accent-color)",
    border: "2px solid var(--accent-color)",
  };

  return (
    <motion.div
      className="experience-page-container animate-fade-in"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="experience-header">
        <h1>Experience</h1>
        <p className="subtitle">My professional journey so far</p>
      </div>

      <VerticalTimeline className="custom-timeline">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={glassStyle}
          contentArrowStyle={glassArrowStyle}
          date="Jun/2024 - Current"
          iconStyle={{
            background: "var(--accent-secondary)",
            color: "#fff",
          }}
          icon={<FaStar />}
        >
          <h3 className="vertical-timeline-element-title">
            Mid-Senior Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Compass.UOL</h4>
          <ExpandableText text="Driven by continuous professional growth, I was promoted to the highest level within my current seniority. Over the past year, my work has been deeply focused on cloud architecture, dealing daily with Microsoft Azure resources. Earning the AZ-900 certification further solidified my cloud expertise. My day-to-day responsibilities heavily involve developing scalable serverless architectures using Azure Functions in .NET, alongside seamlessly managing API Management (APIM) services and cloud databases." />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={glassStyle}
          contentArrowStyle={glassArrowStyle}
          date="Feb/2022 - May/2024"
          iconStyle={greenIcon}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Mid-Senior Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Compass.UOL</h4>
          <ExpandableText text="Embracing the opportunity to expand my technical stack, I joined Compass.UOL specifically to work as a dedicated .NET engineer—a transition made possible by months of rigorous self-study and building personal projects within the ecosystem. Leveraging my prior enterprise experience, I smoothly transitioned into this new domain at a mid-senior level. During this highly productive phase, I also heavily committed to my academic growth, pursuing an MBA and two postgraduate degrees simultaneously." />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={glassStyle}
          contentArrowStyle={glassArrowStyle}
          date="Jun/2021 - Feb/2022"
          iconStyle={greenIcon}
          icon={<FaAngleDoubleUp />}
        >
          <h3 className="vertical-timeline-element-title">
            Mid-Senior Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nasajon Sistemas
          </h4>
          <ExpandableText text="Reaching the Mid-Senior level was a significant milestone that recognized my continuous technical growth and the impact of my work on the company's core integrations. During this phase, I solidified my expertise in software architecture, taking on greater autonomy in decision-making and project delivery. Having successfully completed a rewarding cycle of accelerated development and overcoming major technical challenges, I felt fully prepared to explore new horizons and take on larger-scale projects in a different environment." />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={glassStyle}
          contentArrowStyle={glassArrowStyle}
          date="Sep/2019 - Jun/2021"
          iconStyle={greenIcon}
          icon={<FaAngleDoubleUp />}
        >
          <h3 className="vertical-timeline-element-title">Junior Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nasajon Sistemas
          </h4>
          <ExpandableText text="Having established myself as the focal point for the ERP accounting integration, I was promoted once again after just a year. This period marked a significant expansion in my scope of responsibilities. Tasked with addressing inherited technical debt, I successfully resolved over 400 legacy bugs in the backlog while simultaneously supporting my peers in the development of new features. My ability to balance these critical fixes with ongoing product evolution led directly to my promotion to the next level." />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={glassStyle}
          contentArrowStyle={glassArrowStyle}
          date="Sep/2018 - Sep/2019"
          iconStyle={greenIcon}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Trainee Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nasajon Sistemas
          </h4>
          <ExpandableText text="Following an outstanding performance during my internship, I was offered a full-time position in just one year—half the usual timeline for interns. During this period, I successfully earned my college degree. Amidst team restructuring, I stepped up and became the focal point for the ERP integration project. Delivering consistent, high-quality results in this critical role ultimately paved the way for my next promotion." />
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={glassStyle}
          contentArrowStyle={glassArrowStyle}
          date="Sep/2017 - Sep/2018"
          iconStyle={greenIcon}
          icon={<FaLaptopCode />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Nasajon Sistemas
          </h4>
          <ExpandableText text="Hired as an intern, I was assigned to the team responsible for integrating the HR, financial, and tax departments with the accounting area within an ERP system. During this time, I gained my first hands-on experience with tools like ORMs, CI/CD pipelines, and professional workflows. Beyond developing and debugging code, I was also introduced to the complex business rules driving these systemic integrations." />
        </VerticalTimelineElement>
      </VerticalTimeline>
    </motion.div>
  );
};

export default Experience;
