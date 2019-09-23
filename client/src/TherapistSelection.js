import React from 'react';
import av1 from './avatars/trp1.jpg';
import av2 from './avatars/trp2.jpg';
import av3 from './avatars/trp3.jpg';
import av4 from './avatars/trp4.jpg';
import av5 from './avatars/trp5.jpg';

const THERAPIST_LIST = [
  {
    name: 'Nicholas Doe',
    specialization: 'Psychologist',
    avatar: av1
  },
  {
    name: 'John Doe',
    specialization: 'Cognitive Psychology',
    avatar: av2
  },
  {
    name: 'Jessica Doe',
    specialization: 'Counseling Psychology',
    avatar: av3
  },
  {
    name: 'Anthony Doe',
    specialization: 'Couples Counseling',
    avatar: av4
  },
  {
    name: 'Samantha Doe',
    specialization: 'Clinical Psychology',
    avatar: av5
  },
]

function TherapistSelection() {
  const therapistListPadding = THERAPIST_LIST.length <= 3 ? null : 'therapist-list-padded';

  return (
    <div className='therapist-container'>
      <p>Select your Therapist</p>
      <div className={`therapist-list ${therapistListPadding}`}>
        { THERAPIST_LIST.map(therapist => (
          <div class='therapist'>
            <img className='therapist-avatar' src={therapist.avatar} alt='therapist portrait' />
            <h2>{therapist.name}</h2>
            <p>{therapist.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TherapistSelection;
