/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.product === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product: product.id, quantity: 1 }]);
    }
  };
  const removeFromCart = () => {
    setCartItems([]);
  };

  const clearCart = () => {
    setCartItems([]);
  };



  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);