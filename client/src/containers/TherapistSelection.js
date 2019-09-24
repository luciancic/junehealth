import React, { useState } from 'react';
import Therapist from '../components/Therapist';
import ButtonNext from '../components/ButtonNext';
import ButtonPrev from '../components/ButtonPrev';
import Title from '../components/Title';

function TherapistSelection({ data }) {
  const [ index, setIndex ] = useState(0);
  const [ selected, setSelected ] = useState(null);
  const isFirst = index === 0;
  const isLast = data.length - index <= 3;
  const containerGradientLeft = isFirst ? '' : 'therapist-container-gradient-left';
  const containerGradientRight = isLast ? '' : 'therapist-container-gradient-right';
  const listPadding = data.length <= 3 ? '' : 'therapist-list-padded';

  return (
    <div>
      <Title />
      <div className={`therapist-container ${containerGradientLeft} ${containerGradientRight}`}>
        <p>Select your Therapist</p>
        { !isFirst && <ButtonPrev handleClick={() => setIndex(index - 1)} /> }
        <div className={`therapist-list ${listPadding}`} style={{ transform: `translateX(-${index * 30}vw)`}}>
          { data.map( therapist => <Therapist 
            data={therapist} 
            selected={selected === therapist} 
            handleClick={() => setSelected(therapist) }
          /> ) }
        </div>
        { !isLast && <ButtonNext handleClick={() => setIndex(index + 1)} /> }
      </div>
      <p>Please enter your first name</p>
      <div className='therapist-client-container'>  
        <input className='therapist-client-input' />
        <button className='therapist-client-button'>CONFIRM</button>
      </div>
    </div>
  )
}

export default TherapistSelection;
