import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const result = await response.json()

    setProducts(result);
  }
  
  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className={styles.productsList}>
        {products.map((prod, index) => {
          return <ProductCard prod={prod} key={index}/>
        })}
    </div>
  )
}

export default ProductsList