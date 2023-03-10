import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartContext';
import ItemCartWidget from '../ItemCartWidget/ItemCartWidget'
import styles from './cartPopUp.module.scss'
import { useNavigate } from "react-router-dom"; 

function CartPopUp({active, hidePopUp}) {
    const {productsCart, clearCart, total} = useContext(CartContext);

    const navigate = useNavigate()

    const handleGoToCart = () => {
        hidePopUp();
        navigate("/cart")
    }

    return (
        <div id="hello" className={`${styles.containerCartProducts} ${!active && styles.hiddenCart}`}>
        {productsCart.length
        ? (
            <>
            {productsCart.map(prod => (<ItemCartWidget key={prod.id} product={prod}/>))}
            <div className={styles.cartTotal}>
                <h3>Total:</h3>
                <span className={styles.totalAmount}>{total}€</span>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btnClearCart} onClick={clearCart}>
                    Clear cart
                </button>
                <button className={`${styles.btnClearCart} ${styles.btnGoCart}`} onClick={handleGoToCart}>
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