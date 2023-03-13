import React from "react";
import { Link } from "react-router-dom";
import styles from './navleft.module.scss';

const NavLeft = () => {
    return (
        <nav className={styles.navLeft}>
            <h4>ESHOP</h4>
            <ul className={`navList ${styles.divList}`}>
                <li><Link className={styles.link} to="/">Home</Link></li>
                <li><Link className={styles.link} to="/products">Products</Link></li>
            </ul>
        </nav>
        );
};

export default NavLeft;
