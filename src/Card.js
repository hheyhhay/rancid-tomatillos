import React from 'react';

const Card = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.posterPath}/>
    </div>
  )
}

export default Card;
