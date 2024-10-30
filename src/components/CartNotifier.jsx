import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

const CartNotifier = () => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems } = useCart();

  useEffect(() => {
    const getQuantity = () => {
      return cartItems.reduce((acc, current) =>{
        return acc + current.quantity;
      }, 0);
    }; 
      setQuantity(getQuantity);
    }, [cartItems]);
  
 

  return <p>{quantity} Items in Cart</p>;
};

export default CartNotifier;