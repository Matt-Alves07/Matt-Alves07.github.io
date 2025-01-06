import styles from './Experience.module.css';

const Experience = () => {
  return (
    <div className={styles.experiences}>
      <div className={styles.experience}>
        <div className={styles.timeLineContainer} id={styles.latestExperience}>
          <div id={styles.latestDot}></div>
        </div>

        <div className={styles.details}>
            <h3 className={styles.jobTitle}>Mid-Senior Software Engineer</h3>
            <span className={styles.period}>Compass.UOL - Jun/2024 - Current</span>
            <p className={styles.summary}>
              As a result of my efforts and continuous personal and professional growth, I was promoted to the highest level within my current seniority, bringing me one step closer to a senior position in the company. During this time, I also achieved several milestones, including earning an MBA in Software Engineering, as well as completing two postgraduate degrees in Database Administration and IoT.
            </p>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.timeLineContainer}>
          <div className={styles.dot}></div>
        </div>

        <div className={styles.details}>
            <h3 className={styles.jobTitle}>Mid-Senior Software Engineer</h3>
            <span className={styles.period}>Compass.UOL - Feb/2022 - May/2024</span>
            <p className={styles.summary}>
              After several years at my previous company, I decided to seek new challenges and broaden my professional experience. I leveraged the knowledge I had gained there, along with the skills acquired from recent courses, to tackle a new role at the entry level of this seniority. During this phase, I also pushed myself to grow academically, enrolling in an MBA program and pursuing two postgraduate degrees.
            </p>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.timeLineContainer}>
          <div className={styles.dot}></div>
        </div>

        <div className={styles.details}>
            <h3 className={styles.jobTitle}>Mid-Senior Developer</h3>
            <span className={styles.period}>Nasajon Sistemas - Jun/2021 - Feb/2022</span>
            <p className={styles.summary}>
              As a result of my achievements and continuous personal and professional growth, I received my final raise at my previous company. Following this, I felt it was time to explore new horizons and challenge myself in a different environment. The outcomes of this decision are reflected in the steps outlined above.
            </p>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.timeLineContainer}>
          <div className={styles.dot}></div>
        </div>

        <div className={styles.details}>
            <h3 className={styles.jobTitle}>Junior Developer</h3>
            <span className={styles.period}>Nasajon Sistemas - Sep/2019 - Jun/2021</span>
            <p className={styles.summary}>
              Thanks to the work I accomplished in my previous role, I was placed in a junior position that reflected my achievements at that time. One key highlight from this period was the challenge of eliminating over 400 registered bugs in the module I was working on, which I successfully completed. This accomplishment led to my promotion to the next position, as seen above.
            </p>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.timeLineContainer}>
          <div className={styles.dot}></div>
        </div>

        <div className={styles.details}>
            <h3 className={styles.jobTitle}>Trainee Software Developer</h3>
            <span className={styles.period}>Nasajon Sistemas - Sep/2018 - Sep/2019</span>
            <p className={styles.summary}>
              This was the result of the outstanding work I performed as an intern. As an exception, I was offered a full-time software developer role, occupying a position between intern and junior software developer. During this period, I also graduated from college. Building on the positive reputation I had established, just one year after securing this role and obtaining my degree, I was promoted to the next position in the company, as you can see above.
            </p>
        </div>
      </div>

      <div className={styles.experience}>
        <div className={styles.timeLineContainer} id={styles.oldestExperience}>
          <div className={styles.dot} id={styles.oldestDot}></div>
        </div>

        <div className={styles.details}>
            <h3 className={styles.jobTitle}>Software Developer Intern</h3>
            <span className={styles.period}>Nasajon Sistemas - Sep/2017 - Sep/2018</span>
            <p className={styles.summary}>
              This was my first role as a software developer. Among my responsibilities, I significantly improved my database administration skills while working on a legacy application that relied heavily on database functions and triggers. The combination of this challenging environment—where urgent tasks were the norm—accelerated my growth, enabling me to transition to a full-time software developer position within just one year.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;