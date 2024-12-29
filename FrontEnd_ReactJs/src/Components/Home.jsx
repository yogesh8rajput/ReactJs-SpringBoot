import axios from "axios";
import { React, use, useEffect, useState } from "react";

const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((response) => {
      const productdata = response.data.map((products) => ({
        id: products.product_id,
        name: products.product_name,
        price: products.product_price,
        quantity: products.product_quantity,
        status: products.product_status,
        type: products.product_type,
      }));
      setproducts(productdata);
      // console.log(productdata);
    });
  }, []);

  return (
    <>
      <h1>Products</h1>
      <table className="border-4 border-black">
            <thead>
                <th>product_id</th>
                <th> product_name</th>
                <th>product_price</th>
                <th>product_quantity</th>
                <th>product_status</th>
                <th>product_type</th>
            </thead>
      {products.map((products, index) => (
        
            <tbody key={index}>
                <tr>
                    <td>{products.id}</td>
                    <td>{products.name}</td>
                    <td>{products.price}</td>
                    <td>{products.quantity}</td>
                    <td>{products.status}</td>
                    <td>{products.type}</td>
                </tr>
            </tbody>
        
      ))}

      </table>
    </>
  );
};

export default Home;
