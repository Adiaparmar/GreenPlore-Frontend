import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null); // Add alert state

  const addToCart = (product, subcategoryId) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id && item.subcategoryId === subcategoryId
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      setAlertMessage({
        message: `${product.name} quantity updated in cart.`,
        type: "success",
      });
    } else {
      setCartItems([...cartItems, { product, subcategoryId, quantity: 1 }]);
      setAlertMessage({
        message: `${product.name} added to cart.`,
        type: "success",
      });
    }

    setTimeout(() => {
      setAlertMessage(null); // Clear alert after 3 seconds
    }, 3000);
  };

  const removeFromCart = (product, subcategoryId) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          !(
            item.product.id === product.id &&
            item.subcategoryId === subcategoryId
          )
      )
    );
  };

  const isInCart = (product, subcategoryId) => {
    return cartItems.some(
      (item) =>
        item.product.id === product.id && item.subcategoryId === subcategoryId
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, alertMessage }}
    >
      {children}
    </CartContext.Provider>
  );
};
