import React, { useEffect } from 'react';
import Title from '../components/Title';

function Wait({ close }) {
  useEffect(() => {
    setTimeout(close, 5000)
  }, [])

  return (
    <div className='wait-container'>
      <Title />
      <div className='wait-checkmark' />
      <p className='wait-text'>Please wait, your therapist will be out shortly.</p>
      <div className='wait-close-container'>
        <button className='wait-close' onClick={close}>CLOSE</button>
        <span className='wait-close-text'>Automatically after 5 sec...</span>
      </div>
    </div>
  )
}

export default Wait;
