import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    if (!product) return <div>Loading...</div>;


    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
            <p className="category">Category: {product.category}</p>
            <p className="rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <button 
                onClick={() => addToCart(product)}
                className="add-to-cart-btn"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;