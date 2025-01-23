import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({result}) => {

  return(
  <>
<div className="flex flex-wrap">
{/* <table className="border-2 w-full border-collapse">
<thead>
    <th>Name</th>
    <th>Brand</th>
    <th>Category</th>
    <th>Price</th>
</thead> */}
    {result.map((result,id) => {
        return(
< >

    {/* <tbody>
        <tr key={id} className="hover:bg-gray-200" onClick={((e)=>alert(`You clicked${result.product_name}`))}>
            <td>{result.product_name}</td>
            <td>{result.product_brand}</td>
            <td>{result.product_Category}</td>
            <td>{result.product_price}</td>
        </tr>
    </tbody> */}



    
<Link to={`products/${result.product_id}`}>
            <div
              className="card bg-slate-100 rounded p-6 m-5 place-items-center"
              key={id}
            >
              <div className="">
                <img
                  src={`data:image/jpg;base64,${result.image_data}`}
                  alt="Not Found"
                  className="h-64 w-44 object-cover"
                />
              </div>
              <h1 className="font-bold text-3xl">{result.product_brand}</h1>
              <p className="p-2 text-purple-500 text-xl">
                {result.product_name}
              </p>

              <table className="w-full m-4 ">
                <tbody>
                  <tr>
                    <td>Release Date</td>
                    <td> {result.release_date}</td>
                  </tr>

                  <tr>
                    <td>
                      {" "}
                      <p className="p-2 font-bold font-mono text-lg text-green-400">
                        ₹{result.product_price}
                      </p>
                    </td>
                    <td>
                      <Link
                        to="/oneproduct"
                        className="bg-blue-500 text-white p-2 rounded font-bold"
                      >
                        {result.product_status == 1
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Link>



                </>
        )
    })}
    </div>
    {/* </table> */}
  </>
  )
};

export default SearchResult;
