import React from 'react';

function Therapist({ data }) {
  return (
    <div class='therapist'>
      <img className='therapist-avatar' src={data.avatar} alt='therapist portrait' />
      <h2 className='therapist-name'>{data.name}</h2>
      <p>{data.specialization}</p>
    </div>
  )
}

export default Therapist;
