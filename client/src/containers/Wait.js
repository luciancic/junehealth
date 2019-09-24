import React from 'react';
import Title from '../components/Title';

function Wait() {
  return (
    <div>
      <Title />
      <div className='wait-checkmark' />
      <p className='wait-text'>Please wait, your therapist will be out shortly.</p>
      <button className='wait-close'>CLOSE</button>
      <span className='wait-close-text'>Automatically after 5 sec...</span>
    </div>
  )
}

export default Wait;
