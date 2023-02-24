import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext/CartContext';
import ItemCartWidget from '../ItemCartWidget/ItemCartWidget'
import styles from './cartPopUp.module.scss'

function CartPopUp({active}) {
    const {productsCart, clearCart, totalPrice} = useContext(CartContext);

    return (
        <div id="hello" className={`${styles.containerCartProducts} ${!active && styles.hiddenCart}`}>
        {productsCart.length
        ? (
            <>
            {productsCart.map(prod => (<ItemCartWidget key={prod.id} product={prod}/>))}
            <div className={styles.cartTotal}>
                <h3>Total:</h3>
                <span className={styles.totalAmount}>{totalPrice().toFixed(2)}€</span>
            </div>
            <button className={styles.btnClearCart} onClick={clearCart}>
                Clear cart
            </button>
            </>
            )
            : <p className={styles.cartEmpty}>The cart is empty</p>}
        </div>
    )
}

export default CartPopUp