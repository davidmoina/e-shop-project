import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Api/useFetch';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const { collection } = useParams();
  
  const url = collection ? `https://fakestoreapi.com/products/category/${collection}` : "https://fakestoreapi.com/products"

    const { data, loading } = useFetch(url);

  return (
    <div className={styles.productsList}>
        {data?.map(prod => {
          return <ProductCard prod={prod} key={prod.id}/>
        })}
    </div>
  )
}

export default ProductsList