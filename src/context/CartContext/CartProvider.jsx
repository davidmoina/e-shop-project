import React, { useEffect, useState } from 'react'
import { CartContext } from './CartContext'

const CartProvider = ({children}) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

    const [productsCart, setProductsCart] = useState(cartLocalStorage);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(productsCart));
    }, [productsCart])

    const onAdd = (prod) => {
        const inCart = productsCart.find(item => item.id === prod.id);

        if(inCart) {
            const newProduct  = productsCart.map(item => 
                item.id === prod.id 
                ? {...item, quantity: item.quantity + prod.quantity} 
                : item);
            return setProductsCart([...newProduct]);
        }

        setProductsCart([...productsCart, prod]);
    }

    const clearCart = () => {
        setProductsCart([])
    }

    const totalPrice = () => productsCart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    const count = () => productsCart.reduce((prev, act) => prev + act.quantity, 0);

    const onDelete = (prod) => {
        const results = productsCart.filter(
            item => item.id !== prod.id
        )
        setProductsCart(results);
    }

    return (
        <CartContext.Provider value={{productsCart, onAdd, clearCart, count, totalPrice, onDelete}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider