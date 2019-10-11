import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Therapist from '../components/Therapist';


function TherapistList({ data, index, selectedState: [selected, setSelected] }) {
  const listPadding = data.length <= 3 ? '' : 'therapist__list--padded';
  
  return (
    <animated.div className={`therapist__list ${listPadding}`} style={{ transform: `translateX(-${index * 30}vw)`}}>
      { data.map( (therapist, i) => (
        <Therapist 
          key={therapist.name}
          data={therapist} 
          selected={selected === i} 
          handleClick={() => setSelected(selected === i ? null : i)}
        /> 
      ))}
    </animated.div>
  )
}

export default TherapistList;
