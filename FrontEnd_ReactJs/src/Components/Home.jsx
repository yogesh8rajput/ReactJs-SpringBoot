import axios from "axios";
import { React, useEffect, useState } from "react";

const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8090/products");
        setproducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error" + error);
      }
    };

    fetchdata();
  }, []);

  return (
    <>
      <table className="w-full border border-black border-collapse">
        <thead className="border border-black">
          <th>ID</th>
          <th>NAME</th>
          <th>DESCRIPTION</th>
          <th>BRAND</th>
          <th>PRICE</th>
          <th>CATEGORY</th>
          <th>QUANTITY</th>
          <th>STATUS</th>
          <th>DATE</th>
        </thead>

        {products.map((product) => (
          <tbody className="border border-black">
            <tr className=" hover:bg-slate-300">
              <td>{product.product_id}</td>
              <td>{product.product_name}</td>
              <td>{product.product_desc}</td>
              <td>{product.product_brand}</td>
              <td>₹{product.product_price}</td>
              <td>{product.product_Category}</td>
              <td>{product.product_quantity}</td>
              <td>{product.product_status ? "Available":"Out of Stock"}</td>
              <td>{product.release_date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default Home;
