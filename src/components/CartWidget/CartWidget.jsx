import React, { useContext, useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CartPopUp from '../CartPopUp/CartPopUp';
import { CartContext } from '../../context/CartContext/CartContext';
import styles from './cartWidget.module.scss'

function CartWidget() {
    const [active, setActive] = useState(false);
    const {countProducts} = useContext(CartContext);

    const hidePopUp = () => {
        setActive(false);
    }

    return (
        <>
        <div className={styles.widgetContainer}>
            <li className={styles.basketContainer} onClick={() => setActive(!active)}>
                <ShoppingBasketIcon style={{fontSize: 25}}/>
                {countProducts > 0 && <span className={styles.totalSpan}>{countProducts}</span>}
            </li>
            <CartPopUp active={active} hidePopUp={hidePopUp}/>
        </div>
        </>
    )
    }

export default CartWidget