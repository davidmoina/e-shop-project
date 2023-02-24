import React, { useContext, useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CartPopUp from '../CartPopUp/CartPopUp';
import { CartContext } from '../../context/CartContext/CartContext';
import styles from './cartWidget.module.scss'

function CartWidget() {
    const [active, setActive] = useState(false);
    const {count} = useContext(CartContext);

    const totalItems = count();

    return (
        <>
        <div className={styles.widgetContainer}>
            <li onClick={() => setActive(!active)}>
                <ShoppingBasketIcon style={{fontSize: 25}}/>
                {totalItems > 0 && <span className={styles.totalSpan}>{totalItems}</span>}
            </li>
        </div>
        <CartPopUp active={active}/>
        </>
    )
    }

export default CartWidget