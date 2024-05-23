import { useState, useEffect } from "react";
import {fetchDataFromApi} from "./utils/api";

function App() {

  useEffect(() => {
    apitesting()
  }, []);

  function apitesting() {
	fetchDataFromApi('/movie/popular').then((response)=>console.log(response))
  }

  return (
    <>
      <div className="App">App</div>
    </>
  );
}

export default App;
