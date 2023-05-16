import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import data from "./temp.json";
import { useState } from "react";


function App(){
  let[search, setSearch] = useState("");
  return(
    <>
   
   <div className="container mt-5">
   <input className="form-control manu01" type="text" placeholder="Search Movie Here" value={search} onChange={function(e){
    setSearch(e.target.value)
   }}/>
   </div>
    <div className="container mt-5">
    <div className="row">
          {
            data.filter((movie) => movie.Title.toLowerCase().includes(search.toLowerCase())).map(function(movies){
              return(
              <div className="col-12 col-md-6">
              <div className="card mt-5 mb-5">
              <img src={movies.Poster} class="card-img-top" alt="..."/>
              <div className="card-body">
              <h5 className="card-title">Movie Name: {movies.Title}</h5>
              <h5 className="card-title">Release of Year: {movies.Year}</h5>
              <h5 className="card-title">IMDB_id: {movies.imdbID}</h5>
             </div>
             </div>
             </div>
          
             )
            })
          }
             </div>
             </div>
    </>

  )
}

export default App;