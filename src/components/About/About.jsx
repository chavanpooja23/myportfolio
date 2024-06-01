import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <p>
                With expertise in HTML, CSS, JavaScript, and the modern ReactJS framework, I excel in building responsive and optimized websites that deliver exceptional user experiences. I thrive on leveraging cutting-edge frontend technologies to create seamless interfaces and interactive web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <p>
                On the backend side, I have extensive experience developing fast and optimized systems and APIs using Spring Boot. I specialize in designing and implementing efficient solutions that streamline processes, enhance system functionality, and ensure scalability. My expertise lies in working with RESTful APIs, microservices, and various databases to deliver high-quality, robust applications.
              </p>
            </div>
          </li>
        </ul>
        
      </div>
      <div className={styles.center}>
          <a href="https://drive.google.com/file/d/10LOcZDOBmRiqaLgpo0VZ4NkEDirMKWm7/view?usp=sharing" className={styles.downloadBtn} target="_blank">
            Resume
          </a>
        </div>
    </section>
  );
};
