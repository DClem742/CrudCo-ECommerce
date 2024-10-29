import { useLoaderData, Link, useSearchParams, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Products.module.css";
import { categories } from "./Categories";

export const loader = async ({ params }) => {
  try {
    const apiUrl = params.id 
      ? `http://localhost:8000/products/${params.id}`
      : `http://localhost:8000/products`;
    
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Loading products:', error);
    return [];
  }
};

const Products = () => {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const { id } = useParams();

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

if (id) {
  const product = Array.isArray(products) ? products.find(p => p.id === parseInt(id)) : products;
    
  // Add this check
  if (!product) {
      return <div>Loading product...</div>;
  }
    
  return (
      <div className={styles.productDetail}>
          <Link to="/products" className={styles.backButton}>← Back to Products</Link>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} className={styles.detailImage} />
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
  );
}
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => {
          const type = product?.__type__?.toLowerCase() || '';
          return type === selectedCategory.toLowerCase();
        });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.categoryFilter}>
        <button
          onClick={() => handleCategoryChange("all")}
          className={`${styles.filterButton} ${
            selectedCategory === "all" ? styles.active : ""
          }`}
        >
          All
        </button>

        {categories.map(({ name }) => (
          <button
            key={name}
            onClick={() => handleCategoryChange(name)}
            className={`${styles.filterButton} ${
              selectedCategory === name ? styles.active : ""
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <ul className={styles.productList}>
        {filteredProducts.map((product) => (
          <li key={product.id} className={styles.productCard}>
            <Link
              to={`/products/${product.id}`}
              className={styles.productLink}
            >
              <h3 className={styles.productTitle}>{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <p className={styles.productPrice}>
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;