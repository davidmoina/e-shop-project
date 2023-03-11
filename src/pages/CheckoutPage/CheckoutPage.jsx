import React, { useContext } from 'react'
import CartItem from '../../components/CartItem/CartItem';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { CartContext } from '../../context/CartContext/CartContext'
import styles from './checkoutPage.module.scss'

const CheckoutPage = () => {

  const { productsCart, subtotal, tax, shipping, total } = useContext(CartContext);

  return (
    <div className={styles.checkoutPageContainer}>
      <div className={styles.formContainer}>
        <CheckoutForm/>
      </div>
      
      <div className={styles.orderContainer}>
        <div className={styles.productsContainer}>
          {productsCart.map(product => (
            <CartItem key={product.id} product={product} checkout={true}/>
          ))}
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.prices}>
            <p>Subtotal</p>
            <span>{subtotal}€</span>
          </div>
          <div>
            <p>Shipping</p>
            <span>{shipping}€</span>
          </div>
          <div>
            <p>Taxes</p>
            <span>{tax}€</span>
          </div>
          <div className={styles.total}>
            <p>Order Total</p>
            <span>{total}€</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage