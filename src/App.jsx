import { useState } from 'react';
import  ShoppingList  from './components/ShoppingList.jsx';
import  ShoppingForm from './components/ShoppingForm.jsx';

function App() {
  const [shoppingList, setShoppingList] = useState([])

  const generateList = (groceryItems) => {
    setShoppingList(groceryItems);
    return
  }


  return (
    <>
     <h1>Supermarket Sweep</h1>
     <ShoppingForm generateList={generateList} />
     <ShoppingList items={shoppingList} />
    </>
  )
}

export default App;
