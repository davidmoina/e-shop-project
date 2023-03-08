import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ProductDetailPage = () => {

  const [prodDetail, setProdDetail] = useState({});

  console.log("render product detail page")

  const {productId} = useParams();

  const url = "https://fakestoreapi.com/products/"

  useEffect(() => {
    
    const getProducts = async() => {
      try {
        const response = await fetch(url + productId);
        const result = await response.json()

        setProdDetail(result);
      } catch (error) {
        console.error(error);
      }
    }
  
    getProducts();

  }, [productId])
  
  console.log(prodDetail)

  return (
    <ItemDetail prodDetail={prodDetail}/>
  )
}

export default ProductDetailPage