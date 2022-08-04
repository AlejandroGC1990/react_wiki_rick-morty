import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location"
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";

function App() {
  <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path= "/location" elemental={<Location/>}/>
      </Routes>
  </Router>
}

const Home = () => {

    let [fetchedData, updateFetchedData] = useState([]);
    let {info, results} = fetchedData;
    let [pageNumber, updatePageNumber] =useState(1);
    let [search, setSearch] = useState("");
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
     
    useEffect(() => {
      (async function(){
        let data = await fetch(api).then((res) => res.json());
        updateFetchedData(data);
      })();
     }, [api]);

    return (
      <div className="App">  
        <h1 className="text-center mb-3">Characters</h1>
        <Search setSearch={setSearch} updatePageNumber={updatePageNumber}/>
        
        <div className="container">
          <div className="row">
          <Filter
            pageNumber={pageNumber}
            status={status}
            updateGender={updateGender}
            updateStatus={updateStatus}
            updateSpecies={updateSpecies}
            updatePageNumber={updatePageNumber}
          /> 
            <div className="col-lg-8 col-12">
              <div className="row">
                <Card results={results} />
              </div>
            </div>
          </div>
        </div>
        <Pagination
          info={info}
          pageNumber={pageNumber}
          updatePageNumber={updatePageNumber}
        />
      </div>
    );
}

export default App;
