import React, { useContext } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import Header from '../../containers/HeaderContainer/Header'
import { CartContext } from '../../context/CartContext/CartContext'
import styles from './cartPage.module.scss'

const CartPage = () => {

  const { productsCart } = useContext(CartContext);


  return (
    <>
    <Header/>
    <div className={styles.cartPageContainer}>
      <h2>Cart Page</h2>
      <section className={styles.productsSection}>
        <h4>Shopping Cart</h4>
        <div>
          {productsCart.map(product => (
            <CartItem key={product.id}/>
          ))}
        </div>
      </section>

      <aside className={styles.asideSection}>
        <h4>Order summary</h4>
        <div>
          <div>
            <p>Subtotal</p>
            <span>45€</span>
          </div>
          <div>
            <p>Shipping estimate</p>
            <span>00</span>
          </div>
          <div>
            <p>Tax Estimate</p>
            <span>00</span>
          </div>
          <div>
            <p>Order Total</p>
            <span>45€</span>
          </div>
          <button>Checkout</button>
        </div>
      </aside>
    </div>
    </>
  )
}

export default CartPage