import React from 'react'
import styles from './cartItem.module.scss'

const CartItem = () => {
  return (
    <div className={styles.itemContainer}>
      <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="mens t-shirt"  />
      <div className={styles.infoContainer}>
        <div className={styles.productDetailsCart}>
          <h4>Mens Casual Premium Slim Fit T-Shirts</h4>
          <span>20€</span>
          <span>1</span>
          <span className={styles.closeSpan}>X</span>
        </div>
        <p className={styles.stockP}><span>V</span> In stock</p>
      </div>

    </div>
  )
}

export default CartItem