import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Products.module.css";
import { categories } from "./Categories";

export const loader = async () => {
  try {
    const apiUrl = `http://localhost:8000/products`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading products:', error);
    return [];  // Return empty array as fallback
  }
};

const Products = () => {
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");

  // Update selected category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className={styles.star}>★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className={styles.star}>½</span>);
    }
    
    return <div className={styles.rating}>{stars}</div>;
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
        {filteredProducts.map((product) => {
          return (
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
                  <div className={styles.ratingContainer}>
                    {renderStars(product.rating.rate)}
                    <span className={styles.ratingCount}>
                      ({product.rating.count})
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;