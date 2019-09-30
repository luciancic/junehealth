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
  const containerGradientLeft = isFirst ? '' : 'therapist__list-container-gradient--left';
  const containerGradientRight = isLast ? '' : 'therapist__list-container-gradient--right';
  const listPadding = data.length <= 3 ? '' : 'therapist__list--padded';
  const isConfirmEnabled = (selected !== null) && (clientName !== '');

  return (
    <div className='therapist__container'>
      <Title />
      <div className={`therapist__list-container ${containerGradientLeft} ${containerGradientRight}`}>
        <p>Select your Therapist</p>
        { !isFirst && <ButtonPrev handleClick={() => setIndex(index - 1)} /> }
        <div className={`therapist__list ${listPadding}`} style={{ transform: `translateX(-${index * 30}vw)`}}>
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
      <div className='therapist__confirm-container'>
        <p className='therapist__confirm-text'>Please enter your first name</p>
        <div className='therapist__confirm-input-container'>  
          <input className='therapist__confirm-input-form' onChange={ev => setClientName(ev.target.value)}/>
          <button className={`therapist__confirm-input-button ${isConfirmEnabled ? 'therapist__confirm-input-button--enabled' : ''}`} onClick={isConfirmEnabled && handleClick}>CONFIRM</button>
        </div>  
      </div>
    </div>
  )
}

export default TherapistSelection;
