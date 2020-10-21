import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recorder from './Recorder.js';
import spiral from  './spiral.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spiral} className="App-logo" alt="logo" />
        <h1> Indigital Voice Recorder</h1>
        <p>
          Press the record button when you're ready to start
        </p>


        <br></br>
        <Recorder></Recorder>

      </header>
    </div>
  );
}

export default App;
