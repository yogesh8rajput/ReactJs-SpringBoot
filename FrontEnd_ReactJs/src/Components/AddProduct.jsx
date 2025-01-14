import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [iserror, setiserror] = useState(false);
  const [product, setProduct] = useState({
    // product_id: "",
    product_name: "",
    product_desc: "",
    product_brand: "",
    product_price: "",
    product_Category: "",
    product_quantity: "",
    release_date: "",
    // product_status: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = async (e) => {
    e.preventDefault();
    console.log(product);
    
    try {
      const response = await axios.post("http://localhost:8090/products/add", product, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      });
      
      console.log("Product added successfully", response.data);
    } catch (error) {
      console.log("Error:", error);
      setiserror(true);
    }
  };
  

  // =======================================================
  return (
    <>
      <div className="bg-slate-500 p-5">
        <div className="bg-gray-200 p-5 w-fit place-self-center rounded-3xl">
          <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
            ADD PRODUCT
          </h1>
          <form
            onSubmit={(e) => ProductRegister(e)}
            className="flex flex-col gap-3"
          >
            <table className="w-auto border-collapse">
              <tbody>
                <tr className="border-b-2 border-b-gray-300 ">
                  <td className="p-4">
                    {" "}
                    <label>Name:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="product_name"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Description:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <textarea
                      name="product_desc"
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    ></textarea>
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    {" "}
                    <label>Brand:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="text"
                      name="product_brand"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Price:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="number"
                      name="product_price"
                      min="0"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Category:</label>
                  </td>

                  <td className="p-4">
                    <select
                      name="product_Category"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className="border-teal-700 border-2 bg-transparent w-full outline-none p-2"
                    >
                      <option
                        value="Electronics"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        Electronics
                      </option>
                      <option
                        value="Stationory"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        Stationory
                      </option>
                      <option
                        value="Home Appliances"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        Home Appliances
                      </option>
                      <option
                        value="Toys"
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      >
                        Toys
                      </option>
                    </select>
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Quantity:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="number"
                      name="product_quantity"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                </tr>

                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Release Date:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="date"
                      name="release_date"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </td>
                </tr>
                {/* <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Image</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="file"
                    />
                  </td>
                </tr> */}
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-8 h-8"
                      name="product_status"
                      // onChange={(e) => {
                        // handleChange(e);
                      // }}
                    />
                    <label> Available</label>
                  </td>

                  <td className="text-center">
                    {/* <button className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl  ">
                      ADD
                    </button> */}
                    <input type="submit" value="Add" className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl  " />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
