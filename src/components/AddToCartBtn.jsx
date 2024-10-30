import { useCart } from "../CartContext";

const AddToCartBtn = ({ product }) => {
    const { addToCart } = useCart();

    const handleClick = () => {
        return addToCart(product);
    };

    return (
    <button type= "button" onClick={handleClick}>
        Add to Cart 
    </button>
    );
};
  
export default AddToCartBtn;