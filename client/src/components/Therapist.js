import React from 'react';
import SelectedMark from './SelectedMark';

function Therapist({ data, handleClick, selected }) {
  const selectedClass = selected ? 'therapist__card--selected' : '';

  return (
    // Do not change onMouseUp to onClick because drag gesture stops propagation of mouseUp.
    <div className={`therapist__card ${selectedClass}`} onMouseUp={handleClick}>
      { selected && <SelectedMark /> }
      <img className='therapist__card-avatar' src={data.avatarFile} alt='therapist portrait' />
      <h2 className='therapist__card-name'>{data.name}</h2>
      <p className='therapist__card-specialization'>{data.specialization}</p>
    </div>
  )
}

export default Therapist;
