import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Preeti</h1>
        <p className={styles.description}>
          I'm an engineering student & a software developer. I develop websites using react & NodeJs. Reach out to me if you'd like to learn more!
        </p>
        <a href="mailto:pp886086@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/drive/folders/1M5oBYNHpEYO5lTfj_ThUlMhUUueHu5v8?usp=sharing" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/myPhoto.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
