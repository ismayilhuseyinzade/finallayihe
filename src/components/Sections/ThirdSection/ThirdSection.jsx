import React from "react";
import styles from "./ThirdSection.module.scss";

const ThirdSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <div className={styles.image}>
          <img
            src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
            alt=""
          />
        </div>
        <div className={styles.imgText}>
          <h2>Trusted Merchant</h2>
          <p>FOR 50 YEARS</p>
        </div>
      </div>
      <div className={styles.textBox}>
        <h3>MERCHANT COMPANY</h3>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
          ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
          inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
          alias eius vero vel!
        </p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default ThirdSection;
