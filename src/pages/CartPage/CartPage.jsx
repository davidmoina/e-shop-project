import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../context/CartContext/CartContext'
import styles from './cartPage.module.scss'

const CartPage = () => {

  const {productsCart, subtotal, total, shipping, tax} = useContext(CartContext);

  const navigate = useNavigate()

  const handleGoToCheckout = () => {
    navigate('/cart/checkout')
  }  
  
  return (
    <>
    <div className={styles.cartPageContainer}>
      <h2>Shopping Cart</h2>
      <section className={styles.productsSection}>
        <div>
          {productsCart.length <= 0 && <p>The cart is empty please add items</p>}
          {productsCart.map(product => (
            <CartItem key={product.id} product={product} checkout={false}/>
          ))}
        </div>
      </section>

      <aside className={styles.asideSection}>
        <div className={styles.priceDetails}>
          <h4>Order summary</h4>
          <div>
            <p>Subtotal</p>
            <span>{subtotal}€</span>
          </div>
          <div>
            <p>Shipping estimate</p>
            <span>{shipping}€</span>
          </div>
          <div>
            <p>Tax Estimate</p>
            <span>{tax}€</span>
          </div>
          <div>
            <p>Order Total</p>
            <span>{total}€</span>
          </div>
          <button onClick={handleGoToCheckout} className={styles.btnCheckout}>Checkout</button>
        </div>
      </aside>
    </div>
    </>
  )
}

export default CartPage