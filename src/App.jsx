import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Categories from './components/Categories.jsx';
import CategoryProducts from './components/CategoryProducts.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import HomePage from './components/HomePage.jsx';
import Registration from './components/Registration.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
      setCart(cart.filter((_, i) => i !== index));
  };

  return (
      <div className="min-h-screen bg-black text-white">
          <BrowserRouter>
              <nav className="bg-gray-900 shadow-md p-4 mb-8">
                  <div className="container mx-auto flex items-center justify-center space-x-6">
                      <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
                      <Link to="/categories" className="text-white hover:text-blue-400 transition-colors">Categories</Link>
                      <Link to="/cart" className="text-white hover:text-blue-400 transition-colors">
                          Cart ({cart.length})
                      </Link>
                      <Link to="/register" className="text-white hover:text-blue-400 transition-colors">Register</Link>
                  </div>
              </nav>

              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route path="/category/:categoryName" element={<CategoryProducts />} />
                  <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
                  <Route path="/cart" element={<Cart items={cart} removeFromCart={removeFromCart} />} />
                  <Route path="/register" element={<Registration />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;