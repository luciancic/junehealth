import React, { useEffect, useState } from 'react';

import Splash from './containers/Splash';
import TherapistSelection from './containers/TherapistSelection';
import Wait from './containers/Wait';

import './App.css';

function App() {
  // Values can be 'splash', 'select', 'wait'
  const [page, setPage] = useState('splash');
  const [therapists, setTherapists] = useState(null);

  useEffect(() => {
    // Simulate loading of client. Will change later
    setTimeout(() => setPage('select'), 1000)
    fetch('/api/therapists').then(res => res.json()).then(data => setTherapists(data))
  }, [])
  
  return (
    <div className="app">
      { !therapists || (page === 'splash') ? <Splash /> :
        page === 'select' ? <TherapistSelection data={therapists} handleClick={() => setPage('wait')} /> :
        page === 'wait' ? <Wait close={() => setPage('select')} /> : null }
    </div>
  );
}

export default App;
