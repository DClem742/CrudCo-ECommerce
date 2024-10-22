import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div>
            <h2>Shop by Category</h2>
            <div className="categories-grid">
                {categories.map(category => (
                    <Link key={category} to={`/category/${category}`}>
                        <div className="category-card">
                            {category.toUpperCase()}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
