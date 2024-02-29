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
              <h3>Frontend Developer</h3>
              <p>
              I have made fast and optimal friendly user interfaces for web and responsive systems with React and React UI and
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I have experience developing fast and optimized backend systems. and secure APIs in Laravel, SpringBoot Netcore Express and Django as well as good relational and non-relational database construction
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/iconandroid.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Mobile Development</h3>
              <p>
              I have designed and participated in development and consulting for native software for mobile devices with technologies such as JetPackCompose React Native and Flutter
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
