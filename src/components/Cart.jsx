const Cart = ({ items, removeFromCart }) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {items.map((item, index) => (
                <div key={index} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <button 
                            onClick={() => removeFromCart(index)}
                            className="remove-item-btn"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default Cart;