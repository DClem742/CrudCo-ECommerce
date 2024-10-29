import { useLoaderData } from 'react-router-dom';
import styles from './Categories.module.css';

export const loader =async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/categories`;
  const data = await fetch(apiUrl).then((res) => res.json());
  return data;
};

const Categories = () => {
  const categories = useLoaderData();

  return (
    <>
      <h2>Categories</h2>
      {categories.map((category, index) => {
        return (
          <ul key={`${category}-${index}`}>
            <li>{category}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Categories;    
