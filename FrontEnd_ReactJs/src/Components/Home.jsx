import axios from "axios";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [iserror, setiserror] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("http://localhost:8090/products");
        setproducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error" + error);
        setiserror(true);
      }
    };

    fetchdata();
  }, []);

  if (iserror) {
    return (
      <>
        <div className="error grid place-items-center h-96">
          <p className="text-red-600 text-5xl">Something went wrong......</p>
          <p className="text-pink-950 text-2xl underline">-----Start the Server Please----</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="cardbox flex flex-wrap">
        {products.map((product) => (
          <div className="card bg-slate-100 rounded h-80 w-96 m-5 place-items-center">
            <h1 className="font-bold text-3xl">{product.product_brand}</h1>
            <p className="p-2 text-purple-500 text-xl">
              {product.product_name}
            </p>
            {product.release_date}
            <p className="p-2 font-bold font-mono text-lg text-green-400">
              ₹{product.product_price}
            </p>
            <Link
              to="/oneproduct"
              className="bg-blue-500 text-white p-2 rounded font-bold"
            >
              Add to Cart
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
