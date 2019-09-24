import React, { useEffect, useState } from 'react';

import Splash from './containers/Splash';
import TherapistSelection from './containers/TherapistSelection';
import Wait from './containers/Wait';

import therapists from './data/therapists';

import './App.css';

function App() {
  // Values can be 'splash', 'select', 'wait'
  const [page, setPage] = useState('splash');

  useEffect(() => {
    // Simulate loading of client. Will change later
    setTimeout(() => setPage('select'), 1000)
  }, [])
  
  return (
    <div className="app">
      { page === 'splash' ? <Splash /> :
        page === 'select' ? <TherapistSelection data={therapists} handleClick={() => setPage('wait')} /> :
        page === 'wait' ? <Wait close={() => setPage('select')} /> : null }
    </div>
  );
}

export default App;
