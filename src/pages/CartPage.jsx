import { useEffect, useState } from 'react';
import { useCart } from '../CartContext';
import { loader as productsLoader } from '../routes/Products';
import styles from './CartPage.module.css';

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, clearCart } = useCart();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await productsLoader();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const getProductDetails = (productId) => {
    return products.find(product => product.id === productId);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductDetails(item.product);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Your Shopping Cart</h1>
      {cartItems.map((item) => {
        const product = getProductDetails(item.product);
        return product ? (
          <div key={item.product} className={styles.cartItem}>
            <img 
              src={product.image} 
              alt={product.title} 
              className={styles.productImage}
            />
            <div className={styles.productDetails}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>Price: ${product.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(product.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ) : null;
      })}
      <div className={styles.cartSummary}>
        <h2 className={styles.cartTotal}>Cart Total: ${calculateTotal().toFixed(2)}</h2>
        <button onClick={clearCart} className={styles.clearCartButton}>Clear Cart</button>
      </div>
    </div>
  );
};
export default CartPage;