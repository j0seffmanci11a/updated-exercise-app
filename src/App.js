/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from "react";

const RunningExercise = () => {
  const [laps, setLaps] = useState([]);
  const [startTime, setStartTime] = useState(null);

  const recordLap = () => {
    const now = new Date();
    setLaps([...laps, now.toLocaleTimeString()]);
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-4">Running Exercise</h2>
      <button
        onClick={recordLap}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Record Lap
      </button>
      <ul className="mt-4 text-left">
        {laps.map((lap, index) => (
          <li key={index} className="border-b py-1">
            Lap {index + 1}: {lap}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RunningExercise;
*/

import React from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    return <AppNavigator />;
}
