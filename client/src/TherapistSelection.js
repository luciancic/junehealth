import React from 'react';

const THERAPIST_LIST = [
  {
    name: 'Nicholas Doe',
    specialization: 'Psychologist',
    avatar: ''
  },
  {
    name: 'John Doe',
    specialization: 'Cognitive Psychology',
    avatar: ''
  },
  {
    name: 'Jessica Doe',
    specialization: 'Counseling Psychology',
    avatar: ''
  },
  {
    name: 'Anthony Doe',
    specialization: 'Couples Counseling',
    avatar: ''
  },
  {
    name: 'Samantha Doe',
    specialization: 'Clinical Psychology',
    avatar: ''
  },
]

function TherapistSelection() {
  return (
    <div>
      <p>Select your Therapist:</p>
      { THERAPIST_LIST.map(therapist => (
        <div>
          <img src={therapist.avatar} alt='therapist portrait' />
          <h2>{therapist.name}</h2>
          <p>{therapist.specialization}</p>
        </div>
      ))}
    </div>
  )
}

export default TherapistSelection;
