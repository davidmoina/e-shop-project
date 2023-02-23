import React, { useEffect } from 'react'
import ItemCartWidget from '../ItemCartWidget/ItemCartWidget'
import styles from './cartPopUp.module.scss'

function CartPopUp({active}) {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

    return (
        <div id="hello" className={`${styles.containerCartProducts} ${!active && styles.hiddenCart}`}>

            {cartLocalStorage.map(prod => (<ItemCartWidget key={prod.id} product={prod}/>))}
            
            <div className={styles.cartTotal}>
                <h3>Total:</h3>
                <span className={styles.totalAmount}>3500</span>
            </div>

            {/* <button className='btn-clear-all' onClick={onCleanCart}>
                Clear cart
            </button> */}
            {/* <p className={styles.cartEmpty}>The cart is empty</p> */}
        </div>
    )
}

export default CartPopUp