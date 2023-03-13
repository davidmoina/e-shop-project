import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

  const [productsCart, setProductsCart] = useState(cartLocalStorage);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(productsCart));
  }, [productsCart]);

  useEffect(() => {
    setCountProducts(count());
    setSubtotal(totalPrice());
    setShipping(shippingPrice());
    setTax(taxes());
    setTotal(finalPrice());
  }, [subtotal, shipping, tax, productsCart]);

  const onAdd = (prod) => {
    const inCart = productsCart.find((item) => item.id === prod.id);

    if (inCart) {
      const newProduct = productsCart.map((item) =>
        item.id === prod.id
          ? { ...item, quantity: item.quantity + prod.quantity }
          : item
      );
      return setProductsCart([...newProduct]);
    }
    setProductsCart([...productsCart, prod]);
  };

  const clearCart = () => {
    setProductsCart([]);
  };

  const totalPrice = () => {
    const result = productsCart.reduce(
      (prev, act) => prev + act.quantity * act.price,
      0
    );
    return parseFloat(result.toFixed(2));
  };

  const shippingPrice = () => {
    if (subtotal < 50 && subtotal !== 0) {
      return 10;
    }
    return 0;
  };

  const count = () => {
    const num = productsCart.reduce((prev, act) => prev + act.quantity, 0);
    return num;
  };

  const finalPrice = () => {
    const result = subtotal + shipping + tax;
    return parseFloat(result.toFixed(2));
  };

  const taxes = () => {
    const result = (subtotal + shipping) * 0.21;
    return parseFloat(result.toFixed(2));
  };

  const onDelete = (prod) => {
    toast.info("Product deleted from cart")
    const results = productsCart.filter((item) => item.id !== prod.id);
    setProductsCart(results);
  };

  return (
    <CartContext.Provider
      value={{
        productsCart,
        onAdd,
        clearCart,
        countProducts,
        tax,
        total,
        shipping,
        subtotal,
        onDelete,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
