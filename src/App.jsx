import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/pageNotfound";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // const url = useSelector((state) => state.home.url);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  function fetchApiConfig() {
    fetchDataFromApi("/configuration").then((response) => {
     
      const url = {
        backdrop: response.images.secure_base_url + "original",
        poster: response.images.secure_base_url + "original",
        profile: response.images.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url));
    });
  }

  const genresCall = async () => {
    let promises = []
    let endPoints = ['tv', 'movie']
    let allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({genres}) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })
    dispatch(getGenres(allGenres));
  }

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:mediaType" element={<Details/>}/>
          <Route path="/search/:query" element={<SearchResult/>}/>
          <Route path="/explore/:mediaType" element={<Explore/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
