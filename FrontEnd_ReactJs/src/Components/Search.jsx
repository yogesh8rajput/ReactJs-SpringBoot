import React, { useState } from "react";

const Search = ({searchResult}) => {
  const [search, setSearch] = useState("");
  // console.log(search);

  const fetchProducts = (value) => {
    fetch(`http://localhost:8090/products/search?keyword=${search}`).then(
      (response) =>
        response.json().then((json) =>
          //  console.log(json)
      searchResult(json)
          // {
            // const results = json.filter((product) => {
            //   return (
            //     value &&
            //     product &&
            //     product.product_name.toLowerCase().includes(value)
            //   );
            // });
            // console.log(results);
          // }
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
        <form className="px-32">
          <input
            type="search"
            name="keyword"
            id=""
            placeholder="Search"
            className="border-b-2 border-b-slate-400 rounded-3xl w-1/4 px-4 h-12"
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
