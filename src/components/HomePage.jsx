import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8 text-white">Welcome to Crud Co</h1>
            <div className="max-w-6xl mx-auto">
                <section className="bg-green-700 rounded-lg p-12 text-center mb-12">
                    <h2 className="text-3xl font-semibold mb-4 text-white">Find Everything You Need</h2>
                    <p className="text-gray-300 mb-6">Browse our wide selection of products across multiple categories</p>
                    <Link 
                        to="/categories" 
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Start Shopping
                    </Link>
                </section>
                
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                        <p className="text-gray-600">Get your items delivered quickly</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
                        <p className="text-gray-600">Competitive prices on all items</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md text-black">
                        <h3 className="text-xl font-semibold mb-3">Quality Products</h3>
                        <p className="text-gray-600">Curated selection of top products</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default HomePage;