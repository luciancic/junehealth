import React, { useState } from 'react';
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
  const [ index, setIndex ] = useState(0);
  const isFirst = index === 0;
  const isLast = THERAPIST_LIST.length - index <= 3;
  const containerGradientLeft = isFirst ? '' : 'therapist-container-gradient-left';
  const containerGradientRight = isLast ? '' : 'therapist-container-gradient-right';
  const listPadding = THERAPIST_LIST.length <= 3 ? '' : 'therapist-list-padded';

  return (
    <div className={`therapist-container ${containerGradientLeft} ${containerGradientRight}`}>
      <p>Select your Therapist</p>
      { !isFirst && <button className='therapist-button therapist-button-prev' onClick={() => setIndex(index - 1)} >
        <svg style={{ transform: 'rotate(180deg)' }} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9V7L1 7L1 9Z" fill="white"/>
        </svg>
      </button> }
      <div className={`therapist-list ${listPadding}`} style={{ transform: `translateX(-${index * 30}vw)`}}>
        { THERAPIST_LIST.map(therapist => (
          <div class='therapist'>
            <img className='therapist-avatar' src={therapist.avatar} alt='therapist portrait' />
            <h2 className='therapist-name'>{therapist.name}</h2>
            <p>{therapist.specialization}</p>
          </div>
        ))}
      </div>
      { !isLast && <button className='therapist-button therapist-button-next' onClick={() => setIndex(index + 1)} >
        <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289L12.3431 0.928932C11.9526 0.538408 11.3195 0.538408 10.9289 0.928932C10.5384 1.31946 10.5384 1.95262 10.9289 2.34315L16.5858 8L10.9289 13.6569C10.5384 14.0474 10.5384 14.6805 10.9289 15.0711C11.3195 15.4616 11.9526 15.4616 12.3431 15.0711L18.7071 8.70711ZM1 9L18 9V7L1 7L1 9Z" fill="white"/>
        </svg>
      </button> }
    </div>
  )
}

export default TherapistSelection;
