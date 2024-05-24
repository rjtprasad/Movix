import { useState, useEffect } from "react";
import {fetchDataFromApi} from "./utils/api";
import {useSelector, useDispatch} from 'react-redux'
import {getApiConfiguration} from './store/homeSlice'   

function App() {
  const url = useSelector((state)=>state.home.url)
  const dispatch = useDispatch()

  useEffect(() => {
    apitesting()
  }, []);

  function apitesting() {
	fetchDataFromApi('/movie/popular').then(
    (response) => {
      console.log(response),
      dispatch(getApiConfiguration(response))
    }
  )
  }

  return (
    <>
      <div className="App">App</div>
      {url?.total_pages}
    </>
  );
}

export default App;
