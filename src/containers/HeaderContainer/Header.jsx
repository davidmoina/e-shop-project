import React from 'react';
import NavLeft from '../../components/NavLeft/NavLeft';
import NavRight from '../../components/NavRight/NavRight';
import styles from './header.module.scss';

const Header = ({children}) => {

  console.log("render header")

  return (
    <header className={styles.header}>
        <NavLeft/>
        <NavRight />
    </header>
  )
}

export default Header