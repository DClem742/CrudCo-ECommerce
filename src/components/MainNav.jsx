import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useCart } from "../CartContext";
import ShoppingBag from "./ShoppingCart";
import CartNotifier from "./CartNotifier";

import styles from "./Nav.module.css";

const MainNav = () => {
  const { token, user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = logout();
    if (!error) {
      return navigate("/login");
    }
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        {token && user ? (
          <>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        <li>
          <Link to="/cart" className={styles.cartLink}>
            <div className={styles.cartItems}>
              <ShoppingBag />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
