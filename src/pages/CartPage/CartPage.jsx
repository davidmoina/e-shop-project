import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { CartContext } from '../../context/CartContext/CartContext'
import styles from './cartPage.module.scss'

const CartPage = () => {

  const {productsCart, subtotal, total, shipping, tax} = useContext(CartContext);

  const { actualUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGoToCheckout = () => {
    navigate('/cart/checkout')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  const handleEmptyCart = () => {
    navigate('/products')
  }
  
  return (
    <>
    <div className={styles.cartPageContainer}>
      <h2>Shopping Cart</h2>
      <section className={styles.productsSection}>
        <div>
          {productsCart.length <= 0 && (
            <div className={styles.emptyContainer}>
              <p>The cart is empty please add items</p>
              <button onClick={handleEmptyCart} className={styles.btnContinueShopping}>Continue Shopping</button>
            </div>)}
          {productsCart.map(product => (
            <CartItem key={product.id} product={product} checkout={false}/>
          ))}
        </div>
      </section>

      <aside className={styles.asideSection}>
      {productsCart.length > 0 && (
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
          {actualUser 
          ? <button onClick={handleGoToCheckout} className={styles.btnCheckout}>Checkout</button>
          : <>
            <p className={styles.info}>Please sign in first to proceed to checkout</p>
            <button onClick={handleLogin} className={styles.btnCheckout}>Sign in</button>
          </> }
          
        </div>
      )}
      </aside>
    </div>
    </>
  )
}

export default CartPage