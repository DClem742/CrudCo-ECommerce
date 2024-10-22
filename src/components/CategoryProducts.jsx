import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryProducts = () => {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [categoryName]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8 text-center capitalize">{categoryName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <Link 
                        to={`/product/${product.id}`} 
                        key={product.id}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200"
                    >
                        <div className="aspect-w-1 aspect-h-1 w-full">
                            <img 
                                src={product.image} 
                                alt={product.title}
                                className="object-contain w-full h-48 p-4"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold line-clamp-2 mb-2">{product.title}</h3>
                            <p className="text-xl font-bold text-blue-600 mb-2">
                                ${product.price.toFixed(2)}
                            </p>
                            <div className="flex items-center text-sm text-gray-600">
                                <span className="text-yellow-400 mr-1">⭐</span>
                                <span>{product.rating.rate}</span>
                                <span className="mx-1">•</span>
                                <span>{product.rating.count} reviews</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;