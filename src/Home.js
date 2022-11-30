import {React, useEffect, useState} from "react";
import SearchBox from "./components/SearchBox";
import MovieSingel from "./components/MovieSingel";


function Home () {
  
  
  const api_key = `dd553bd18da52db5b93a11c3221826dc`;

  const [data,setData] = useState([]);
  const [searchValue, setSearchValue] = useState('a')

  
  const getDataReq = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=dd553bd18da52db5b93a11c3221826dc&query=${searchValue}`;
    
    const response = await fetch(url);
    const responseJson = await response.json();

    if(responseJson.results){
      setData(responseJson.results);
      
    }
  }
  useEffect(()=>{
    getDataReq(searchValue);
  },[searchValue])
  
  return (
    <div className="App">
      <h1>Movies</h1>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
      
      <div className="row justify-content-center">
        {data.map((movie) => {
          return <MovieSingel key={movie.id} movie={movie} />;
        })}
        
      </div>
      
    </div>
  );
}

export default Home