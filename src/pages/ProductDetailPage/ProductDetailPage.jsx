import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

const ProductDetailPage = () => {

  const [prodDetail, setProdDetail] = useState({});
  const [loading, setLoading] = useState(false)

  console.log("render product detail page")

  const {productId} = useParams();

  const url = "https://fakestoreapi.com/products/"

  useEffect(() => {
    setLoading(true);
    
    const getProducts = async() => {
      try {
        const response = await fetch(url + productId);
        const result = await response.json()

        setProdDetail(result);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }
  
    getProducts();

  }, [productId])
  
  console.log(prodDetail)

  return (
    loading ? <SkeletonLoader/> : <ItemDetail prodDetail={prodDetail}/>
  )
}

export default ProductDetailPage