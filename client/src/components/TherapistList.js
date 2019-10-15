import React, { useEffect, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Therapist from '../components/Therapist';


function TherapistList({ data, index, selectedState: [selected, setSelected] }) {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));
  const [offset, setOffset] = useState(0);
  const listPadding = data.length <= 3 ? '' : 'therapist__list--padded';
  
  useEffect(() => setOffset(index * 30), [index]);
  const bind =  useDrag(({ down, movement, ...rest }) => {
    set({ xy: down ? movement : [0, 0] })
  });

  return (
    <animated.div {...bind()} className={`therapist__list ${listPadding}`} style={{ transform: `translateX(-${offset}vw)` }}>
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
