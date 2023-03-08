import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../containers/HeaderContainer/Header'
import styles from './home.module.scss'

function Home() {
    return (
        <>
        <div className={styles.headerContainer}>
            <Header/>
            <div className={styles.headerText}>
                <h2>Spring Collection is here</h2>
                <p>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. </p>
                <Link to="/products"><button className={styles.btnExplore}>Explore</button></Link>
            </div>
        </div>
        </>
    )
}

export default Home