import React from "react";
import styles from "./LeadershipSection.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const LeadershipSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h4>TEAM</h4>
        <h1>Leadership</h1>
      </div>
      <div className={styles.imageBoxs}>
        <div className={styles.imgBox}>
          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
          </div>
          <h3>John Rooster</h3>
          <span>CO-FOUNDER, PRESIDENT</span>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className={styles.iconBox}>
            <div><FaFacebookF/></div>
            <div><FaTwitter /></div>
            <div><FaLinkedinIn/></div>
            <div><FaInstagram/></div>
          </div>
        </div>
        <div className={styles.imgBox}>
          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
          </div>
          <h3>Tom Sharp</h3>
          <span>CO-FOUNDER, COO</span>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className={styles.iconBox}>
            <div><FaFacebookF/></div>
            <div><FaTwitter /></div>
            <div><FaLinkedinIn/></div>
            <div><FaInstagram/></div>
          </div>
        </div><div className={styles.imgBox}>
          <div className={styles.img}>
            <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
          </div>
          <h3>Winston Hodson</h3>
          <span>MARKETING</span>
          <p>
            Nisi at consequatur unde molestiae quidem provident voluptatum
            deleniti quo iste error eos est praesentium distinctio cupiditate
            tempore suscipit inventore deserunt tenetur.
          </p>
          <div className={styles.iconBox}>
            <div><FaFacebookF/></div>
            <div><FaTwitter /></div>
            <div><FaLinkedinIn/></div>
            <div><FaInstagram/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
