import { useLoaderData } from 'react-router-dom';
import styles from './Categories.module.css';

export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/categories`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Categories data:", data); // This will show the returned data
    return data;
  } catch (error) {
    console.error('Categories loader error:', error);
    throw new Error(`Failed to load categories: ${error.message}`);
  }
};
const Categories = () => {
  const categories = useLoaderData();

  return (
    <>
      <h2>Categories</h2>
      {categories.map((category) => (
        <ul key={category.id}>
          <li>{category.name}</li>
        </ul>
      ))}
    </>
  );
};

export default Categories;    
