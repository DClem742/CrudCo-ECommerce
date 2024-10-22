import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShoppingList from './components/ShoppingList.jsx';
import Categories from './components/Categories.jsx';
import CategoryProducts from './components/CategoryProducts.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/categories">Categories</Link> |
                <Link to="/cart">Cart ({cart.length})</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Categories />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:categoryName" element={<CategoryProducts />} />
                <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart items={cart} removeFromCart={removeFromCart} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;