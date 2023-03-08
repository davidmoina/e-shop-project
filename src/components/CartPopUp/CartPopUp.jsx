import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext/CartContext';
import ItemCartWidget from '../ItemCartWidget/ItemCartWidget'
import styles from './cartPopUp.module.scss'
import { useNavigate } from "react-router-dom"; 

function CartPopUp({active}) {
    const {productsCart, clearCart, totalPrice} = useContext(CartContext);

    const navigate = useNavigate()

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
            <div className={styles.btnContainer}>
                <button className={styles.btnClearCart} onClick={clearCart}>
                    Clear cart
                </button>
                <button className={`${styles.btnClearCart} ${styles.btnGoCart}`} onClick={() => navigate("/cart")}>
                    Go to cart
                </button>
            </div>
            </>
            )
            : <p className={styles.cartEmpty}>The cart is empty</p>}
        </div>
    )
}

export default CartPopUp