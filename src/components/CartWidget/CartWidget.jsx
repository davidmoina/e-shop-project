import React, { useContext, useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CartPopUp from '../CartPopUp/CartPopUp';
import { CartContext } from '../../context/CartContext/CartContext';
import styles from './cartWidget.module.scss'
import { Link, NavLink } from 'react-router-dom';

function CartWidget() {
    const [active, setActive] = useState(false);
    const {count} = useContext(CartContext);

    const totalItems = count();

    const hidePopUp = () => {
        setActive(false);
    }

    return (
        <>
        <div className={styles.widgetContainer}>
            <li onClick={() => setActive(!active)}>
                <ShoppingBasketIcon style={{fontSize: 25}}/>
                {totalItems > 0 && <span className={styles.totalSpan}>{totalItems}</span>}
            </li>
            <CartPopUp active={active} hidePopUp={hidePopUp}/>
        </div>
        </>
    )
    }

export default CartWidget