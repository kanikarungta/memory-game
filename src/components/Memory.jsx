import React, { useState } from 'react';
import { generatePhotoLocationMap } from '../shared/utility';
import Card from './Card';
import './Memory.css';

const memoryMap = generatePhotoLocationMap();

function Memory() {
  
  const [firstSelection, setFirstSelection] = useState(null);


  function handleClick (photo) {
    if (firstSelection && photo === firstSelection) {
      // alert('yes' );
      console.log(memoryMap);
      setFirstSelection(null);
      const matchedPhotoArray = memoryMap.filter((el, i) => { if(el === photo) return i });
      console.log(matchedPhotoArray);
      matchedPhotoArray.forEach(i => document.getElementById(i).classList +=' background-black');
    } else {
      setFirstSelection(photo);
    }
  }

  return <div className='card-container'>
    {
      memoryMap.map((el,i) => <Card key={`${el}-${i}`} photo={el} index={i} handleClick={handleClick}/>)
    }
  </div>;
}

export default Memory;
