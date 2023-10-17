import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h2>Frontend Developer</h2>
              <p>
                I have experience of developing front-end systems using HTML, CSS & ReactJS
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I am a student of Delhi Technological University, Delhi with cgpa of 8.35 having coursework of subjects like DBMS, Operating System, Data Structures, Object Oriented Programming & etc.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Interests</h3>
              <p>
                I have interest in technical domains like problem solving & developing websites 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
