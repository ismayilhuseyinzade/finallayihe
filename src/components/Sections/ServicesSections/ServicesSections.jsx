import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import styles from './ServicesSections.module.scss'

const ServicesSections = () => {
  return (
    <div className={styles.continer}>
      <div className={styles.textBox}>
        <span>OUR SERVICES</span>
        <h1>We Offer Services</h1>
      </div>
      <div className={styles.serviceBox}>
        <div className={styles.service}>
          <div className={styles.icon}>
            <FaBagShopping />
          </div>
          <div className={styles.serviceText}>
            <h3>Business Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.icon}>
            <FaBagShopping />
          </div>
          <div className={styles.serviceText}>
            <h3>Business Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.icon}>
            <FaBagShopping />
          </div>
          <div className={styles.serviceText}>
            <h3>Business Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.icon}>
            <FaBagShopping />
          </div>
          <div className={styles.serviceText}>
            <h3>Business Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.icon}>
            <FaBagShopping />
          </div>
          <div className={styles.serviceText}>
            <h3>Business Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.icon}>
            <FaBagShopping />
          </div>
          <div className={styles.serviceText}>
            <h3>Business Consulting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quis molestiae vitae eligendi at.
            </p>
            <span>Learn More</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSections;
