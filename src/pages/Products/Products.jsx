import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
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

            </aside>
            <ProductsContainer>
                <ProductsList/>
            </ProductsContainer>
        </main>
        </>
    )
}

export default Products