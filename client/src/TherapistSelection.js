import React, { useState } from 'react';
import Therapist from './components/Therapist';
import ButtonNext from './components/ButtonNext';
import ButtonPrev from './components/ButtonPrev';

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
      { !isFirst && <ButtonPrev handleClick={() => setIndex(index - 1)} /> }
      <div className={`therapist-list ${listPadding}`} style={{ transform: `translateX(-${index * 30}vw)`}}>
        { THERAPIST_LIST.map( therapist => <Therapist data={therapist} /> ) }
      </div>
      { !isLast && <ButtonNext handleClick={() => setIndex(index + 1)} /> }
    </div>
  )
}

export default TherapistSelection;
