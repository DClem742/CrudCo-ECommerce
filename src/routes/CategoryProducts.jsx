import { useLoaderData, Link } from "react-router-dom";
import styles from "./Products.module.css";

export const loader = async ({ params }) => {
  // First fetch the category name
  const categoryUrl = `${import.meta.env.VITE_API_URL}/categories/${params.id}`;
  const categoryResponse = await fetch(categoryUrl);
  const category = await categoryResponse.json();

  // Then fetch the products for this category
  const productsUrl = `${import.meta.env.VITE_API_URL}/categories/${params.id}/products`;
  const productsResponse = await fetch(productsUrl);
  const products = await productsResponse.json();

  return { category, products };
};

const CategoryProducts = () => {
  const { category, products } = useLoaderData();

  return (
    <>
      <h2>{category.name} Products</h2>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <p className={styles.description}>{product.description}</p>
              <p className={styles.price}>${product.price}</p>
              <p className={styles.sizes}>Sizes: {product.sizes}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryProducts;