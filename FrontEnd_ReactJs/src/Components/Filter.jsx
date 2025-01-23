import React, { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

const Filter = () => {
const [results,setresults] = useState([]);

  return(
  <div  className="bg-slate-900 h-full p-6">
    <div>
      <Search searchResult={setresults} />
    </div>
    <div>
        <SearchResult result={results}/>
    </div>
  </div>
  )
};

export default Filter;
