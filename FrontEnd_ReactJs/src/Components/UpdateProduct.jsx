import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const {product_id} = useParams();
  const [product,setProduct] = useState(null);
    const [iserror, setiserror] = useState(false);
    const navigate = useNavigate();
  
  const [updatedproduct, setUpdatedProduct] = useState({
    product_id: "",
    product_name: "",
    product_desc: "",
    product_brand: "",
    product_price: "",
    product_Category: "",
    product_quantity: "",
    release_date: "",
    product_status: false,
  });
  // -----------x----------Image-------------x---------

  const [image, setImage] = useState(null);
  const handleImageChange=(e)=>{
    setImage(e.target.files[0]);
  }

  // -----------x----------------x-------------------------x---------
  const handleUpdateChange = (e) => {
    const value = e.target.value;
    setUpdatedProduct({ ...updatedproduct, [e.target.name]: value });
  };

  const ProductUpdate = async (e) => {
    e.preventDefault();
    

// --------------------------------x---Submit---x----------------------
const formData = new FormData();
formData.append("imageFile",image);
formData.append("product",new Blob([JSON.stringify(updatedproduct)],{type:"application/json"}));

axios.put(`http://localhost:8090/products/update/${product_id}`,formData,{headers:{"Content-Type" : "multipart/form-data",},})
.then((response)=>{
  console.log("Product updated successfull!",response.data);
  alert("Product updated successfull!")
  setmsg("Product updated Successfully");
  navigate("/");

})
.catch((error)=>{
  console.error("Error updating Products" , error);
  alert("Error updating Products.",error);
})

// --------------------------------x----------/--------x----------------------
  };

  useEffect(() => {
fetchproduct();
  },[])

  const fetchproduct= async () => {
    try {
      const response = await axios.get(`http://localhost:8090/products/${product_id}`);
      setProduct(response.data);
      setUpdatedProduct(response.data)
    //   console.log(response.data);
  
    } catch (error) {
      console.log("error" + error);
      setiserror(true);
    }
  }
  // if (!product) {
  //   return <div>Loading...</div>;  // Loading state in case the product data is not yet fetched
  // }

  // =======================================================
  return (
    <>
      <div className="bg-slate-500 p-5">
        <div className="bg-gray-200 p-5 w-fit place-self-center rounded-3xl">
          <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
            UPDATE PRODUCT
          </h1>
          <form onSubmit={ProductUpdate} className="flex flex-col gap-3">
            <table className="w-auto border-collapse">
              <tbody>
                <tr className="border-b-2 border-b-gray-300 ">
                  <td className="p-4">
                    <label>Name:</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                      type="text"
                      name="product_name"
                      value={updatedproduct.product_name}
                      onChange={handleUpdateChange}
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
                      value={updatedproduct.product_desc}
                      onChange={handleUpdateChange}
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
                      value={updatedproduct.product_brand}
                      onChange={handleUpdateChange}
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
                      value={updatedproduct.product_price}
                      onChange={handleUpdateChange}
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
                      value={updatedproduct.product_Category}
                      onChange={handleUpdateChange}
                      className="border-teal-700 border-2 bg-transparent w-full outline-none p-2"
                    >
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Stationory">Stationory</option>
                      <option value="Home Appliances">Home Appliances</option>
                      <option value="Toys">Toys</option>
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
                      id="product_quantity"
                      value={updatedproduct.product_quantity}
                      onChange={handleUpdateChange}
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
                      id="release_date"
                      value={updatedproduct.release_date}
                      onChange={handleUpdateChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <label>Image</label>
                  </td>
                  <td className="p-4">
                    {" "}
                    <input
                      className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                      type="file"
                      onChange={handleImageChange}
                    />
                  </td>
                </tr>
                <tr className="border-b-2 border-b-gray-300">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      className="w-8 h-8"
                      name="product_status"
                      onChange={(e) => setProduct({...product
                        ,product_status:e.target.checked
                      })}
                    />
                    <label> Available</label>
                  </td>

                  <td className="text-center">
                    <button className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl" type="submit">
                      UPDATE
                    </button>
                    {/* <input
                      type="submit"
                      value="Add"
                      className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl  "
                    /> */}
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

export default UpdateProduct;
