import React, { useContext } from 'react'
import CartItem from '../../components/CartItem/CartItem';
import { CartContext } from '../../context/CartContext/CartContext'
import styles from './checkoutPage.module.scss'

const CheckoutPage = () => {

  const { productsCart, subtotal, tax, shipping, total } = useContext(CartContext);

  return (
    <div className={styles.checkoutPageContainer}>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <h3 className={styles.largeItem}>Contact information</h3>
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className={styles.largeItem}>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <h3 className={styles.largeItem}>Payment details</h3>
          <div className={styles.largeItem}>
            <label htmlFor="">Address</label>
            <input type="text" />
          </div>
          <div className={styles.littleDiv}>
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
          <div className={styles.littleDiv}>
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className={styles.littleDiv}>
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
          <div className={styles.checkBox}>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              I agree the Terms and Conditions.
            </label>
          </div>
        </form>
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