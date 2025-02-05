import axiosInstance from "../axiosConfig";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
// import Filter from "./Filter";

const Home = () => {
  const [products, setproducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate loading time of 1000 seconds (1000 * 1000 ms = 1000 seconds)
        setTimeout(async () => {
          axiosInstance
            .get("http://localhost:8090/products")
            .then((response) => {
              setproducts(response.data);
              setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
              console.log(error);
              setIsError(true);
              setIsLoading(false); // Set loading to false if there's an error
            });
        }, 10); // Delay of 1000 seconds (1000 * 1000 ms)
      } catch (error) {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="grid place-items-center h-96">
        <p className="text-blue-500 text-4xl">Loading products...</p>
        <p className="text-purple-500 text-2xl">Please wait for a moment.</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="grid place-items-center h-96">
        <p className="text-red-600 text-5xl">Something went wrong...</p>
        <p className="text-pink-950 text-2xl underline">
          -----Start the Server Please----
        </p>
      </div>
    );
  }

  return (
    <>
      {/* <Filter/> */}
      <div className="cardbox flex flex-wrap bg-slate-900">
        {products.map((product, index) => (
          <Link to={`/products/${product.product_id}`} key={index}>
            <div className="card bg-slate-100 rounded p-6 m-5 place-items-center w-96">
              <div className="">
                <img
                  src={`data:image/jpg;base64,${product.image_data}`}
                  alt="Not Found"
                  className="h-64 object-cover"
                />
              </div>
              <h1 className="font-bold text-3xl">{product.product_name}</h1>
              <p className="p-2 text-purple-500 text-xl">
                Brand: {product.product_brand}
              </p>

              <table className="w-full m-4">
                <tbody>
                  {/* <tr>
                    <td>Release Date</td>
                    <td> {product.release_date}</td>
                  </tr> */}

                  <tr>
                    <td>
                      <p className="p-2 font-bold font-mono text-lg text-green-400">
                        ₹{product.product_price}
                      </p>
                    </td>
                    <td>
                      <Link
                        to="/oneproduct"
                        className="bg-blue-500 text-white p-2 rounded font-bold"
                      >
                        {product.product_status === 1
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
