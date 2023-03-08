import React, { useContext, useEffect, useRef, useState } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import { CartContext } from '../../context/CartContext/CartContext'
import styles from './cartPage.module.scss'

const CartPage = () => {

  const values = {
    shippingPrice: 0,
    tax: 0,
    total: 0
  }

  const [finalPrice, setFinalPrice] = useState(values);

  const { productsCart, totalPrice } = useContext(CartContext);
  
  const price = totalPrice();
  
  const taxes = () => price * 0.21;
  
  const total = () => price + finalPrice.tax + finalPrice.shippingPrice;

  useEffect(() => {
    if(price !== 0){
      setFinalPrice({shippingPrice: 0, tax: taxes(), total: total() })
    
      if(price < 50) {
        setFinalPrice({ shippingPrice: 10, tax: taxes(), total: total()});
      }
      return
    }

    return setFinalPrice(values);
  }, [price])
  
  
  return (
    <>
    <div className={styles.cartPageContainer}>
      <h2>Cart Page</h2>
      <section className={styles.productsSection}>
        <h4>Shopping Cart</h4>
        <div>
          {productsCart.length <= 0 && <p>The cart is empty please add items</p>}
          {productsCart.map(product => (
            <CartItem key={product.id} product={product}/>
          ))}
        </div>
      </section>

      <aside className={styles.asideSection}>
        <h4>Order summary</h4>
        <div>
          <div>
            <p>Subtotal</p>
            <span>{price}€</span>
          </div>
          <div>
            <p>Shipping estimate</p>
            <span>{finalPrice.shippingPrice}€</span>
          </div>
          <div>
            <p>Tax Estimate</p>
            <span>{finalPrice.tax.toFixed(2)}€</span>
          </div>
          <div>
            <p>Order Total</p>
            <span>{finalPrice.total.toFixed(2)}€</span>
          </div>
          <button>Checkout</button>
        </div>
      </aside>
    </div>
    </>
  )
}

export default CartPage