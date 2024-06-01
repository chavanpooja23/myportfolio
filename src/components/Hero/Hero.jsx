import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Pooja Chavan</h1>
        <p className={styles.description}>
          Experienced Software Engineer proficient in Java, Spring Boot, and React.js, with a strong track record in API development and system optimization. Reach out to learn more about my expertise and projects! 
        </p>
        <a href="mailto:poojavchavan97@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpeg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
