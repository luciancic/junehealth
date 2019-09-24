import React from 'react';
import Title from './components/Title';
import TherapistSelection from './TherapistSelection';
import therapists from './data/therapists';
import './App.css';

function App() {
  return (
    <div className="app">
      <Title />
      <TherapistSelection data={therapists}/>
    </div>
  );
}

export default App;
