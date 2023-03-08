import React from 'react'
import ProductsList from '../../components/ProductsList/ProductsList'
import ProductsContainer from '../../containers/ProductsContainer/ProductsContainer'
import styles from './productPage.module.scss'

function Products() {
    return (
        <>
        <main className={styles.productContainer}>
            <h2>Products</h2>
            <ProductsContainer>
                <ProductsList/>
            </ProductsContainer>
        </main>
        </>
    )
}

export default Products