import React from 'react';
import SelectedMark from './SelectedMark';

function Therapist({ data, handleClick, selected }) {
  const selectedClass = selected ? 'therapist__card--selected' : '';

  return (
    <div className={`therapist__card ${selectedClass}`} onClick={handleClick}>
      <SelectedMark selected={selected} />
      <img className='therapist__card-avatar' src={data.avatarFile} alt='therapist portrait' />
      <h2 className='therapist__card-name'>{data.name}</h2>
      <p className='therapist__card-specialization'>{data.specialization}</p>
    </div>
  )
}

export default Therapist;
