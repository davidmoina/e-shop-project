import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useFetch } from '../../Api/useFetch'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import ProductsContainer from '../../containers/ProductsContainer/ProductsContainer'
import styles from './productPage.module.scss'

function Products() {

    const url = "https://fakestoreapi.com/products/categories";

    const {data, loading} = useFetch(url);

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
                    {data?.map(item =>( 
                        <CollectionItem key={item} item={item}/>
                    ))}
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