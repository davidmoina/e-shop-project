import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./home.module.scss";
import Trending from "../../components/Trending/Trending";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerText}>
          <h2>Spring Collection is here</h2>
          <p>
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out. But the time is now to be okay to be the greatest you.{" "}
          </p>
          <Link to="/products">
            <button className={styles.btnExplore}>Explore</button>
          </Link>
        </div>
      </div>
      <div className={styles.shopCategory}>
        <h3>Shop by category</h3>
        <div className={styles.sectionsDiv}>
          <div onClick={() => navigate("/products/men's clothing")} className={`${styles.section} ${styles.mens}`}>
              <p>MEN'S CLOTHING</p>
          </div>
          <div onClick={() => navigate("/products/women's clothing")} className={`${styles.section} ${styles.women}`}>
            <p>WOMEN'S CLOTHING</p>
          </div>
          <div onClick={() => navigate("/products/electronics")} className={`${styles.section} ${styles.electronics}`}>
            <p>ELECTRONICS</p>
          </div>
          <div onClick={() => navigate("/products/jewelery")} className={`${styles.section} ${styles.jewelry}`}>
            <p>jewelry</p>
          </div>
        </div>
      </div>
      <Trending/>
    </>
  );
}

export default Home;
