import React from 'react'
import styles from './productOrderShipped.module.scss'

const ProductOrderShipped = ({product}) => {

  const {image, price, title, quantity, description} = product;

  return (
    <>
    <div className={styles.orderProducts}>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div>
          <span>Quantity: <b>{quantity}</b></span>
          <span>Price: <b>{price}€</b></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductOrderShipped