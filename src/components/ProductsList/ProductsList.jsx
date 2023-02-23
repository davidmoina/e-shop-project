import React, { useEffect, useId, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {
  
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]") ;
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [productsCart, setProductsCart] = useState(cartLocalStorage);
  const [quantity, setQuantity] = useState(1)


  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsCart));
    console.log(productsCart)
  }, [productsCart])
  
  
  const getProducts = async () => {
    const response = await fetch(url);
    const result = await response.json()

    setProducts(result);
  }

  const onAdd = (prod) => {
    prod.quantity = 1;

    const inCart = productsCart.find(item => item.id === prod.id);

    if(inCart) {
      const newProduct  = productsCart.map(item => item.id === prod.id ? {...item, quantity: item.quantity + 1} : item)

      return setProductsCart([...newProduct]);
    }

    setProductsCart([...productsCart, prod]);
  }
  
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