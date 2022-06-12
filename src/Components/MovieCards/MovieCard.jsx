import React from 'react'
import Button from '../Button/Button';


function MovieCard(props) {

 

  return (
    <div className='cards'>
    <h2>{props.movie.title}</h2>
    <Button 
          tuggleButton={props.tuggleButton}
          index={props.index}
          movie={props.movie}
          wachedDisplay={props.wachedList}

          />
    </div>
  )
}

export default MovieCard