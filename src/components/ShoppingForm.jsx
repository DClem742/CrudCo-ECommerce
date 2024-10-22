import { useState } from "react"

const ShoppingForm = ({ generateList, products }) => {
    const [groceryItems, setGroceryItems] = useState({
        item1: "",
        item2: "",
        item3: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        generateList(groceryItems);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setGroceryItems((currentState) => ({
            ...currentState,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            {['item1', 'item2', 'item3'].map((itemName) => (
                <label key={itemName}>
                    <select 
                        name={itemName}
                        onChange={handleChange}
                        value={groceryItems[itemName]}
                    >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.id} value={product.title}>
                                {product.title} - ${product.price}
                            </option>
                        ))}
                    </select>
                </label>
            ))}
            <button type="submit">Generate Shopping List</button>
        </form>
    )
};

export default ShoppingForm;