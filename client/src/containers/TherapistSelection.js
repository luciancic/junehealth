import React, { useState } from 'react';
import Therapist from '../components/Therapist';
import ButtonNext from '../components/ButtonNext';
import ButtonPrev from '../components/ButtonPrev';
import Title from '../components/Title';

function TherapistSelection({ data, handleClick }) {
  const [ index, setIndex ] = useState(0);
  const [ selected, setSelected ] = useState(null);
  const [ clientName, setClientName ] = useState('');
  const isFirst = index === 0;
  const isLast = data.length - index <= 3;
  const containerGradientLeft = isFirst ? '' : 'therapist-container-gradient-left';
  const containerGradientRight = isLast ? '' : 'therapist-container-gradient-right';
  const listPadding = data.length <= 3 ? '' : 'therapist-list-padded';
  const isConfirmEnabled = (selected !== null) && (clientName !== '');

  return (
    <div className='therapist-top-container'>
      <Title />
      <div className={`therapist-container ${containerGradientLeft} ${containerGradientRight}`}>
        <p>Select your Therapist</p>
        { !isFirst && <ButtonPrev handleClick={() => setIndex(index - 1)} /> }
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
        { !isLast && <ButtonNext handleClick={() => setIndex(index + 1)} /> }
      </div>
      <div className='therapist-client-container'>
        <p className='therapist-client-text'>Please enter your first name</p>
        <div className='therapist-client-input-container'>  
          <input className='therapist-client-input' onChange={ev => setClientName(ev.target.value)}/>
          <button className={`therapist-client-button ${isConfirmEnabled ? 'therapist-client-button-enabled' : ''}`} onClick={isConfirmEnabled && handleClick}>CONFIRM</button>
        </div>  
      </div>
    </div>
  )
}

export default TherapistSelection;
