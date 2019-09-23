import React from 'react';

function SelectedMark() {
  return (
    <div className='therapist-selected-square'>
      <svg className='therapist-selected-checkmark' width="24" height="18" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.82843 11.1716C4.04738 10.3905 2.78105 10.3905 2 11.1716C1.21895 11.9526 1.21895 13.2189 2 14L4.82843 11.1716ZM2 14L11 23L13.8284 20.1716L4.82843 11.1716L2 14Z" fill="white"/>
        <path d="M29 5C29.781 4.21895 29.781 2.95262 29 2.17157C28.219 1.39052 26.9526 1.39052 26.1716 2.17157L29 5ZM11 23L29 5L26.1716 2.17157L8.17157 20.1716L11 23Z" fill="white"/>
      </svg>
    </div>
  )
}

export default SelectedMark;
