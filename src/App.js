import React from 'react';
import Boards from './components/Boards';

function App() {
  return (
    <div className="App-container">
      <div className="App-header">
        <a className="App-header-logo">
          <span className="App-header-logo-default"></span>
        </a>
      </div>
      <div className="App-content">
        <Boards />
      </div>
    </div>
  );
}

export default App;
