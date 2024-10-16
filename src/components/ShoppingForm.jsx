import { useState } from "react"

const ShoppingForm = ({ generateList}) => {
    const [groceryItems, setGroceryItems] = useState({
        item1: "",
        item2: "",
        item2: "",
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
        return;
          
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                <input type="text" name="item1" onChange={handleChange} value =  {groceryItems.item1} />
            </label>
            <label>
                <input type="text" name="item2" onChange={handleChange} value =  {groceryItems.item2} />
            </label>
            <label>
                <input type="text" name="item3" onChange={handleChange} value =  {groceryItems.item3} />
            </label>
            <button type = "submit">Generate Shopping List</button>
        </form>
    )
};

export default ShoppingForm;