import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import ProductsCard from "../components/ProductsCard/ProductsCard";
import FirstSections from "../components/Sections/FirstSections/FirstSections";
import LeadershipSection from "../components/Sections/LeadershipSection/LeadershipSection";
import ServicesSections from "../components/Sections/ServicesSections/ServicesSections";
import ThirdSection from "../components/Sections/ThirdSection/ThirdSection";
import styles from "./Home.module.scss";

const Home = () => {
  const [data, setData] = useState([]);

  

const getData = () => {
  axios.get('https://dummyjson.com/products?limit=9')
    .then(res => {
      setData(res.data.products)
    }
    )
}
useEffect(() => {
  getData()
},[])
console.log(data.map((item)=>(item)));



const addToBasket =(item)=>{
  axios.post('https://665080feec9b4a4a6032533f.mockapi.io/Basket',item)
}
const addToWish =(item)=>{
  axios.post('https://665080feec9b4a4a6032533f.mockapi.io/Wishlist',item)
}

  return (
    <div>
      <Header />
      <FirstSections />

      <div className={styles.cardBox} >
        {data && data.map(item => <Card item={item} addtobasket={()=>addToBasket(item)} addtowish={()=>addToWish(item)} />)}
      </div> 

      <ThirdSection />
      <LeadershipSection />
      <ServicesSections/>
      <Footer/>
    </div>
  );
}

export default Home;
