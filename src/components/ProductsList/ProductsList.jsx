import React, { useEffect, useId, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([])

  
  const getProducts = async () => {
    const response = await fetch(url);
    const result = await response.json()

    setProducts(result);
  }

  const onAdd = (prod) => {
    setProductsCart([...productsCart, prod])
  }
  console.log(productsCart)
  
  useEffect(() => {
    getProducts();
  },[])

  return (
    <div className={styles.productsList}>
        {products.map((prod, index) => {
          return <ProductCard prod={prod} onAdd={onAdd} key={index}/>
        })}
    </div>
  )
}

export default ProductsList