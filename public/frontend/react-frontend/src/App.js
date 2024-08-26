import Search from "./components/Search.js";
import SearchResultsList from "./components/SearchResultsList.jsx";
import { useState } from "react";
import React from "react";



function App() {

const [results, setResults] = useState([]);

  return (
    <>
      <h1>Workout</h1>
      <div id="exerciseContainter">
        <Search setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </>
    )
};



export default App;
