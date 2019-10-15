import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import Therapist from '../components/Therapist';


function TherapistList({ data, indexState: [index, setIndex], selectedState: [selected, setSelected] }) {
  const [offset, setOffset] = useState(0);
  const listPadding = data.length <= 3 ? '' : 'therapist__list--padded';
  
  const toVw = (px) => Math.round(px / window.innerWidth * 100);
  const calculateOffset = (px) => {
    const newOffset = (index * 30) - toVw(px);
    const maxOffset = (data.length - 3) * 30;
    return newOffset < maxOffset ? newOffset : maxOffset;
  }

  useEffect(() => setOffset(index * 30), [index]);
  const bind =  useDrag(({ down, movement: [x] }) => {
    const newOffset = calculateOffset(x);
    if (down) 
      setOffset(newOffset);
    else 
      setIndex(Math.round(newOffset / 30));
  }, { dragDelay: true });

  return (
    <div {...bind()} className={`therapist__list ${listPadding}`} style={{ transform: `translateX(-${offset}vw)` }}>
      { data.map( (therapist, i) => (
        <Therapist 
          key={therapist.name}
          data={therapist} 
          selected={selected === i} 
          handleClick={() => setSelected(selected === i ? null : i)}
        /> 
      ))}
    </div>
  )
}

export default TherapistList;
