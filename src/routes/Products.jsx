/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, Link } from "react-router-dom";
import styles from "./Products.module.css";

export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/products`;
  const data = await fetch(apiUrl).then((response) => response.json());
  return data;
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