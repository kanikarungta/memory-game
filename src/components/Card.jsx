import React from 'react';
import './Card.css';

function Card({ photo, index, handleClick }) {

  return <div className='card'>
    <img
      src={`https://avatars.dicebear.com/api/avataaars/${photo}.svg`}
      alt='avatar'
      onClick={() => handleClick(photo)}
      id={index}
    />
  </div>;
}

export default Card;
