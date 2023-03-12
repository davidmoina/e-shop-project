import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import ProductsContainer from '../../containers/ProductsContainer/ProductsContainer'
import styles from './productPage.module.scss'

function Products() {
    return (
        <>
        <main className={styles.productContainer}>
            <div className={styles.topContainer}>
                <h2>Products</h2>
                <span>Sort V</span>
            </div>
            <aside className={styles.asideContainer}>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to="./">ALL</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to="men's clothing">MEN'S CLOTHING</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to="women's clothing">WOMEN'S CLOTHING</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to="electronics">ELECTRONICS</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to="jewelery">JEWELER'S</NavLink>
                    </li>
                </ul>
            </aside>
            <ProductsContainer>
                <Outlet/>
            </ProductsContainer>
        </main>
        </>
    )
}

export default Products