import React from 'react';
import SelectedMark from './SelectedMark';

function Therapist({ data, handleClick, selected }) {
  const selectedClass = selected ? 'therapist-selected' : '';

  return (
    <div className={`therapist ${selectedClass}`} onClick={handleClick}>
      { selected && <SelectedMark /> }
      <img className='therapist-avatar' src={data.avatarFile} alt='therapist portrait' />
      <h2 className='therapist-name'>{data.name}</h2>
      <p className='therapist-specialization'>{data.specialization}</p>
    </div>
  )
}

export default Therapist;
