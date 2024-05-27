import React from "react";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBasket3Fill } from "react-icons/bs";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {

   const navigation=useNavigate('')

  return (
    <div className={styles.container}>
      <h1>
        Selling<span>.</span>
      </h1>
      <div className={styles.navBar}>
        <ul>
          <li className={styles.navBarHome}><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Special</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
      <div className={styles.basketIcon}>
        <button onClick={()=> navigation('/Basket')}> <BsBasket3Fill/></button>
        <button onClick={()=> navigation('/Wishlist')}> <FaHeartCirclePlus/> </button>

      </div>
      <div className={styles.hamburgerMenu}>
        <GiHamburgerMenu/>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Special</a></li>
          <li><a href="">Testimonials</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Contact</a></li>
        </ul>

      </div>
    </div>
  );
};

export default Header;
