// src/context/theme.context.js
 
import { createContext, useState } from 'react'; // <== UPDATE
 
const MovieContext = createContext();
 
function MovieProviderWrapper(props) {
  const [movie, setMovie] = useState('light'); // <== ADD
 
  // const toggleMovie = () => {    // <== ADD
  //   if (theme === 'light') {
  //     setMovie('dark');
  //   } else {
  //     setMovie('light');
  //   }
  // };


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
    <MovieContext.Provider value={{ movies, toggleMovie, wachedList, }}>   {/* <== UPDATE  */}
      {props.children}
    </MovieContext.Provider>
  );
}
 
export { MovieContext, MovieProviderWrapper };