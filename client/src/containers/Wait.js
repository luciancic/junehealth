import React, { useEffect } from 'react';
import Title from '../components/Title';

function Wait({ close }) {
  useEffect(() => {
    let timeout = setTimeout(close, 5000);
    return () => clearTimeout(timeout);
  }, [close])

  return (
    <div className='wait__container'>
      <Title />
      <div className='wait__checkmark' />
      <p className='wait__text'>Please wait, your therapist will be out shortly.</p>
      <div className='wait__close-container'>
        <button className='wait__close-button' onClick={close}>CLOSE</button>
        <span className='wait__close-text'>Automatically after 5 sec...</span>
      </div>
    </div>
  )
}

export default Wait;
