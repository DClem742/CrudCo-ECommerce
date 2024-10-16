const ShoppingList = ({ items }) => {
    const { item1, item2, item3 } = items;

    return (
        <div>
            <h2>Shopping List</h2>
                <ul>
                    {!!item1 && <li>{item1}</li>}
                    {!!item2 && <li>{item2}</li>}
                    {!!item3 && <li>{item3}</li>}
                </ul>
        </div>
    );
}

export default ShoppingList;