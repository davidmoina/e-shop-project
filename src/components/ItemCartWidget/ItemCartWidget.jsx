import React from 'react'
import styles from './itemCartWidget.module.scss'

function ItemCartWidget({product}) {
  return (
    <div className={styles.cartProduct}>
        <div className={styles.infoCartProduct}>
            <span>{product.quantity}</span>
            <p className={styles.productTitle}>
                {product.title}
            </p>
            <span>{product.price}€</span>
        </div>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className={styles.iconClose}
            
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
            />
        </svg>
    </div>
  )
}

export default ItemCartWidget