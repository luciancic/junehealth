import React, { useState } from 'react';
import Therapist from '../components/Therapist';
import ButtonNext from '../components/ButtonNext';
import ButtonPrev from '../components/ButtonPrev';
import Title from '../components/Title';

function TherapistSelection({ data, handleClick }) {
  const [ index, setIndex ] = useState(0);
  const [ selected, setSelected ] = useState(null);
  const isFirst = index === 0;
  const isLast = data.length - index <= 3;
  const containerGradientLeft = isFirst ? '' : 'therapist-container-gradient-left';
  const containerGradientRight = isLast ? '' : 'therapist-container-gradient-right';
  const listPadding = data.length <= 3 ? '' : 'therapist-list-padded';

  function shouldPrevBlink() {
    return (selected !== null) && (selected < index)
  }
  function shouldNextBlink() {
    return selected > (index + 2)
  }

  return (
    <div className='therapist-top-container'>
      <Title />
      <div className={`therapist-container ${containerGradientLeft} ${containerGradientRight}`}>
        <p>Select your Therapist</p>
        { !isFirst && <ButtonPrev isBlinking={shouldPrevBlink()} handleClick={() => setIndex(index - 1)} /> }
        <div className={`therapist-list ${listPadding}`} style={{ transform: `translateX(-${index * 30}vw)`}}>
          { data.map( (therapist, i) => (
            <Therapist 
              key={therapist.name}
              data={therapist} 
              selected={selected === i} 
              handleClick={() => setSelected(selected === i ? null : i)}
            /> 
          ))}
        </div>
        { !isLast && <ButtonNext isBlinking={shouldNextBlink()} handleClick={() => setIndex(index + 1)} /> }
      </div>
      <div className='therapist-client-container'>
        <p className='therapist-client-text'>Please enter your first name</p>
        <div className='therapist-client-input-container'>  
          <input className='therapist-client-input' />
          <button className='therapist-client-button' onClick={handleClick}>CONFIRM</button>
        </div>  
      </div>
    </div>
  )
}

export default TherapistSelection;
