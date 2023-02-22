import React from 'react'
import styles from './cartPopUp.module.scss'

function CartPopUp({active}) {

    return (
        <div id="hello" className={`${styles.containerCartProducts} ${!active ? styles.hiddenCart : ""}`}>
            <div className={styles.cartProduct}>
                <div className={styles.infoCartProduct}>
                    <span>5</span>
                    <p className={styles.productTitle}>
                        Mens Casual Premium Slim Fit T-Shirts
                    </p>
                    <span>500</span>
                </div>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className={styles.iconClose}
                    
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                    />
                </svg>
            </div>

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