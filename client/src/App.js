import React from 'react';
import TherapistSelection from './TherapistSelection';
import './App.css';
import titleImg from './assets/title.png';

function App() {
  return (
    <div className="app">
      <header className="app-title">
        <img src={ titleImg } alt="title"/>
      </header>
      <TherapistSelection />
    </div>
  );
}

export default App;
