import { Link } from "react-router-dom";

const categoryData = [
    { name: "electronics", emoji: "🔌" },
    { name: "men's clothing", emoji: "👔" },
    { name: "women's clothing", emoji: "👗" },
    { name: "jewelry", emoji: "💍" }
];
const Categories = () => {
    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryData.map((category) => (
                    <Link 
                        key={category.name}
                        to={`/category/${category.name}`}
                        className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-200 transform hover:scale-105"
                    >
                        <div className="text-6xl mb-4">{category.emoji}</div>
                        <h2 className="text-xl capitalize">{category.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
