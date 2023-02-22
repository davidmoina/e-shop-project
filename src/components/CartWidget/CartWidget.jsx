import React, { useState } from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CartPopUp from '../CartPopUp/CartPopUp';

function CartWidget() {
    const [active, setActive] = useState(false);

    return (
        <div>
            <li onClick={() => setActive(!active)}>
                <ShoppingBasketIcon fontSize="large"/>
                <span></span>
            </li>
            <CartPopUp active={active}/>
        </div>
    )
    }

export default CartWidget