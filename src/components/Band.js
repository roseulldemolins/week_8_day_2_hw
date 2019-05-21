import React from 'react';
import './band.css'

const Band = (props) => {
  const handleRemoveClick = (event) => {
    props.removeBand(props.index);
  }

  const {name, location, year} = props.bandData;

  return(
    <div className='band'>
      <h1>{name}</h1>
      <p>Location: {location}</p>
      <p>Year: {year}</p>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  )
}

export default Band
