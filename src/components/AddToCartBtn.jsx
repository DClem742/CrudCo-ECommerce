import { useCart } from "../CartContext";
import styles from "../routes/Products.module.css";

const AddToCartBtn = ({ product }) => {
    const { addToCart } = useCart();

    const handleClick = () => {
        return addToCart(product);
    };

    return (
    <button 
        type="button" 
        className={styles.addToCartBtn} 
        onClick={handleClick}
    >
        Add to Cart 
    </button>
    );
};
  
export default AddToCartBtn;