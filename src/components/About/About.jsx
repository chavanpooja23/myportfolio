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
              <h3>Frontend Developer</h3>
              <p>
                Experience in building responsive
                and optimized websites using  HTML, CSS, JavaScript,
                as well as modern frameworks like ReactJS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs with Spring Boot.
              </p>
            </div>
          </li>
        </ul>
        
      </div>
      <div className={styles.center}>
          <a href="https://drive.google.com/file/d/1-INYOrKvValIRjMxgC3bfyzPZn6luEzE/view?usp=sharing" className={styles.downloadBtn} target="_blank">
            Resume
          </a>
        </div>
    </section>
  );
};
