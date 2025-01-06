import styles from './Home.module.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { IoMdAttach, IoMdMail, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io';

const Home = () => {
  return (
    <div id={styles.container}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid size={{ sm: 12, md: 3 }} id={styles.profile}>
            <img src="./profile_picture.jpg" id={styles.profilePicture} alt="profile_picture"/>

            <div id={styles.nameAndContact}>
              <p>Matheus Alves</p>

              <div id={styles.buttonGroup}>
                <Tooltip title="Download resume">
                  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="resume"><IoMdAttach /></IconButton>
                  </a>
                </Tooltip>

                <Tooltip title="LinkedIn page">
                  <a href="https://www.linkedin.com/in/matheusalves07/" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="linkedin"><IoLogoLinkedin /></IconButton>
                  </a>
                </Tooltip>

                <Tooltip title="Contact me on WhatsApp">
                  <a href="https://wa.me/5521992339161" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="whatsapp"><IoLogoWhatsapp /></IconButton>
                  </a>
                </Tooltip>

                <Tooltip title="Contact me on my e-mail">
                  <a href="mailto:matheus.alves523@gmail.com" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label='email'><IoMdMail /></IconButton>
                  </a>
                </Tooltip>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 9}} id={styles.coverLetter}>
            <p>
              Hello there, I'm glad for your visit, and I hope you find everything you need to know about me here! With a degree in Information Technology, a postgraduate degree in Software Engineering, and additional qualifications in Database Administration and IoT, I have over seven years of experience in software development, and looking foward for the new achievements the future may hold.
            </p>
            <p>
              At the very beginning of my professonal carreer, I started as a Software Development Intern, where I gained hands-on experience with relational databases and became familiar with the Software Development Life Cycle (SDLC). This foundational role allowed me to work with Object-Relational Mapping (ORM) tools and software integrations, setting the stage for my growth in the field, and, as a reward from professional growth, I started working as a full-time worker and the end of my first year at the company.
            </p>
            <p>
              After a few years, I decided to move to a position where I put in practice the knowledge I already have in .NET 6+ applications, and, doing so, I enhanced my skills in backend development, including automated tests and also non-relational databases, as well as front-end technologies such as Angular and React, allowing me to contribute to full-stack development projects.
            </p>
            <p>
              So far, I hope you found out everything you needed to reach me, and I welcome you to explore the specific pages, for you get to know me better. Thank you!
            </p>
          </Grid>

          <Grid size={{ xs: 12, sm: 12, md: 9}} id={styles.coverLetterMobile}>
            <p>Hello there! I hope you found out everything you needed to reach me, and I welcome you to explore the specific pages, for you get to know me better. Thank you for stoping by!</p>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home;