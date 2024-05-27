import React from "react";
import styles from "./FirstSections.module.scss";

const FirstSections = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h1>Shop With Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div>
          <button className={styles.leftBtn}>SHOP NOW</button>
          <button className={styles.rightBtn}>CLUB MEMBERSHIP</button>
        </div>
      </div>
    </div>
  );
};

export default FirstSections;
