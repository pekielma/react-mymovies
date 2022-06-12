import React, {useState} from 'react'

function Button(props) {
  const [buttonContentent, setButtonContent] = useState('MARK AS WACHED')


  const changeButton = (() => {
    if (!props.movie.wached){
      props.tuggleButton(props.index)
      setButtonContent('DISWACH')
      props.wachedList(props.movie, props.index)
      console.log('oba', props.movie.wached)
    
    } else{
      props.tuggleButton(props.index)
      setButtonContent('MARK AS WACHED')
      props.wachedList(props.movie, props.index)
      console.log('oba', props.movie.wached)
    }
    })

  return (
    <button onClick={changeButton}>{buttonContentent}</button>
  )
}

export default Button
