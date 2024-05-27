import React from "react";
import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h4>
        Copyright ©2024 All rights reserved | This template is made with{" "}
        <FaHeart/> by Colorlib
      </h4>
    </div>
  );
};

export default Footer;
