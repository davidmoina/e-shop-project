import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavLeft from '../../components/NavLeft/NavLeft';
import NavRight from '../../components/NavRight/NavRight';
import styles from './header.module.scss';

const Header = () => {

  console.log("render header")

  return (
    <div className={styles.allContainer}>
      <header className={styles.header}>
          <NavLeft/>
          <NavRight />
      </header>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Header