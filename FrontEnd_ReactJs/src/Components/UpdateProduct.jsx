import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { product_id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  const [updatedProduct, setUpdatedProduct] = useState({
    product_id: "",
    product_name: "",
    product_desc: "",
    product_brand: "",
    product_price: "",
    product_Category: "",
    product_quantity: "",
    release_date: "",
    product_status: true,
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    // Fetch the product data
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8090/products/${product_id}`
        );
        setProduct(response.data);
        setUpdatedProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsError(true);
      }
    };

    fetchProduct();
  }, [product_id]);

  // Handle image upload
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.size < 5000000) { // 5MB limit
      setImage(selectedImage);
    } else {
      alert("Please select a valid image (max 5MB).");
    }
  };

  // Handle product form changes
  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleStatusChange = (e) => {
    setUpdatedProduct({
      ...updatedProduct,
      product_status: e.target.checked,
    });
  };

  const ProductUpdate = async (e) => {
    e.preventDefault();

    // Create FormData to handle file uploads and product data
    const formData = new FormData();
    if (image) {
      formData.append("imageFile", image);
    }
    formData.append("product", JSON.stringify(updatedProduct));

    try {
      const response = await axios.put(
        `http://localhost:8090/products/update/${product_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // necessary for file uploads
          },
        }
      );
      console.log("Product updated successfully!", response.data);
      setMsg("Product updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating product", error);
      setMsg("Error updating product.");
    }
  };

  return (
    <div className="bg-slate-500 p-5">
      <div className="bg-gray-200 p-5 w-fit place-self-center rounded-3xl">
        <h1 className="lg:text-5xl lg:font-normal text-3xl font-extrabold text-center">
          UPDATE PRODUCT
        </h1>
        {msg && <p className="text-green-700 text-center">{msg}</p>}

        <form onSubmit={ProductUpdate} className="flex flex-col gap-3">
          <table className="w-auto border-collapse">
            <tbody>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Id:</label>
                </td>
                <td className="p-4">
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                    type="text"
                    name="product_id"
                    value={updatedProduct.product_id}
                    onChange={handleUpdateChange}
                    disabled
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Name:</label>
                </td>
                <td className="p-4">
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none px-4 py-1"
                    type="text"
                    name="product_name"
                    value={updatedProduct.product_name}
                    onChange={handleUpdateChange}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Description:</label>
                </td>
                <td className="p-4">
                  <textarea
                    name="product_desc"
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                    value={updatedProduct.product_desc}
                    onChange={handleUpdateChange}
                  ></textarea>
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Brand:</label>
                </td>
                <td className="p-4">
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                    type="text"
                    name="product_brand"
                    value={updatedProduct.product_brand}
                    onChange={handleUpdateChange}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Price:</label>
                </td>
                <td className="p-4">
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                    type="number"
                    name="product_price"
                    min="0"
                    value={updatedProduct.product_price}
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
                    value={updatedProduct.product_Category}
                    onChange={handleUpdateChange}
                    className="border-teal-700 border-2 bg-transparent w-full outline-none p-2"
                  >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Stationary">Stationary</option>
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
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                    type="number"
                    name="product_quantity"
                    value={updatedProduct.product_quantity}
                    onChange={handleUpdateChange}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Release Date:</label>
                </td>
                <td className="p-4">
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                    type="date"
                    name="release_date"
                    value={updatedProduct.release_date}
                    onChange={handleUpdateChange}
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-8 h-8"
                    name="product_status"
                    checked={updatedProduct.product_status}
                    onChange={handleStatusChange}
                  />
                  <label> Available</label>
                </td>
              </tr>
              <tr className="border-b-2 border-b-gray-300">
                <td className="p-4">
                  <label>Image:</label>
                </td>
                <td className="p-4">
                  <input
                    className="border-b-teal-700 border-b-2 bg-transparent w-full outline-none p-2"
                    type="file"
                    onChange={handleImageChange}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <button
                    className="px-4 py-1 bg-teal-700 text-white font-bold text-2xl"
                    type="submit"
                  >
                    UPDATE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
