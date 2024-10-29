/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Products.module.css";

export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/products`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Products data:", data); // This will show us what's coming back
    return data;
  } catch (error) {
    console.error('Products loader error:', error);
    throw new Error(`Failed to load products: ${error.message}`);
  }
};
const Products = () => {
  const products = useLoaderData();

  return (
    <>
      <h2>Products</h2>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
            </Link>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Products;