import React, { useState } from "react";
import Navbar from "./Navbar";

const Search = ({searchResult}) => {
  const [search, setSearch] = useState("");
  // console.log(search);

  const fetchProducts = (value) => {
    fetch(`http://localhost:8090/products/search?keyword=${search}`).then(
      (response) =>
        response.json().then((json) =>
      searchResult(json)
          
        )
    );
  };

  const handleChange = (value) => {
    setSearch(value);
    fetchProducts(value);
    // console.log(setSearch);
  };

  return (
    <>
      <div>
    <Navbar/>
        <form className="p-6 ">
          <input
            type="search"
            name="keyword"
            id=""
            placeholder="Search"
            className="border-b-2 border-b-slate-400 rounded-xl w-1/4 px-4 h-12"
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
