import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const apiUrl = `${import.meta.env.VITE_API_URL}/products/add`;
  const jsonData = Object.fromEntries(formData.entries());
  
  const data = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem("sb-access-token")}`
    },
    body: JSON.stringify(jsonData)
  }).then(response => response.json());
  
  return data;
};

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Form method="POST">
        <label>
          Title <input type="text" name="title" />
        </label>   
        <label>
          Description <input type="text" name="description" />
        </label>  
        <label>
          Price <input type="text" name="price" />
        </label> 
        <label>
          Image <input type="text" name="image" />
        </label>  
        <label>
          Category <input type="text" name="category" />
        </label>
        <button type="submit">Add Product</button>
      </Form>
    </>
  );
};

export default Dashboard;