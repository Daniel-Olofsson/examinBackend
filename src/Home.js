import {React, useEffect, useState,useParams} from "react";
import SearchBox from "./components/SearchBox";
import Movie from "./components/Movie";
import MoviePage from "./components/MoviePage";

function Home (props) {
  
  
  return (
    <div className="App">
      <h1>Movies</h1>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<SearchBox searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
			</div>
      
      <div className="row justify-content-center">
        {props.data.map((movie, index) => {
          return <Movie key={movie.id} movie={movie} placeMovie={props.placeMovie} index={index}/>;
                  
        })}
        
      </div>
      
    </div>
  );
}

export default Home