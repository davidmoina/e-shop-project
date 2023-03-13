import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Api/useFetch';
import useFirebase from '../../hooks/useFirebase';
import CustomLoader from '../CustomLoader/CustomLoader';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const { collection } = useParams();

  const { data } = useFirebase(collection);

  return (
    <div className={styles.productsList}>
      {!data && <CustomLoader/>}
      {data?.map(prod => {
        return <ProductCard prod={prod} key={prod.id}/>
      })}
    </div>
  )
}

export default ProductsList