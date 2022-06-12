import React, {useState, useEffect, useContext} from 'react'
import './WachedMovies.scss'

import MovieCard from '../MovieCards/MovieCard'


// import { WachedProvider } from './context/WatchedContext'
import { ThemeContext } from '../../context/movie.context';



function WatchedMovies(props) {
  const [movies, setMovies] = useState(props.wachedMovies);

  const { movie } = useContext(ThemeContext);


 console.log('theme', movie)

  

  console.log('epa', movies)
  return (
    <div className='wached-movies'>
      {movies.map((movie, index) => {
        if(movie.wached){
          return(
            <MovieCard 
            movie={movie}
            tuggleButton={props.tuggleButton}
            index={index}
            wachedList={props.wachedList}
            />
          )
        }
            
      }
          )
        }

    </div>
  )
}

export default WatchedMovies
