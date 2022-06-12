import React, {useState} from 'react'
import ExibitionMovies from '../../Components/ExibitionMovies/ExibitionMovies'
import WatchedMovies from '../../Components/WachedMovies/WatchedMovies'
import './HomePage.scss'
import moviesData from "../../movies.json";

function HomePage() {
  const [movies, setMovies] = useState(moviesData);
  const[wachedMovies, setWachedMovies] = useState([]);
  
  

  let newMovie = [...moviesData];

const tuggleButton = (index) => {
if (!newMovie[index].wached){
  newMovie[index].wached = true
  
  console.log('test', newMovie)
  

} else{
  newMovie[index].wached = false
  
  console.log('test', newMovie)
  
}

}

let wachedMoviesList = [];

const wachedList = (movie, index) => {
  if(movie.wached){
    wachedMoviesList.push(movie)
    setWachedMovies(wachedMoviesList)
    console.log("opa", wachedMovies)
  }else{
    wachedMoviesList.splice(index, 1)
    setWachedMovies(wachedMoviesList)
    console.log("opa", wachedMovies)
  }
}

  return (
    <div className='home-page'>
    <ExibitionMovies 
      // tuggleButton={tuggleButton}
      // movies={movies}
      // wachedList={wachedList}
    />
    <WatchedMovies 
      // wachedMovies={wachedMovies}
      // tuggleButton={tuggleButton}
      // wachedList={wachedList}
      
    />
    </div>
  )
}

export default HomePage