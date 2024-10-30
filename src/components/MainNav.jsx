import { NavLink, useNavigate } from "react-router-dom";
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        {token && user ? (
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        ) : (
          <>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/cart" className={styles.cartLink}>
            <div className={styles.cartItems}>
              <ShoppingBag />
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
   

export default MainNav;