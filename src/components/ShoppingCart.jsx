import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useCart } from '../CartContext';

const ShoppingCart = () => {
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ position: 'relative' }}>
      <figure className={styles.cartIcon} style={{ width: 32, height: 32, margin: 0, padding: 0 }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="#fff"
          style={{ width: "100%", height: "auto", margin: 0, padding: 0 }}
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </figure>
      {totalItems > 0 && (
        <span 
          style={{
            position: 'absolute',
            top: -8,
            right: -8,
            background: '#ff1493',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px'
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default ShoppingCart;