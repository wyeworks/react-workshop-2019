import React from 'react';
import Boards from './components/Boards';

function App() {
  return (
    <div className="App-container">
      <header>
        <a>
          <span className="logo" />
        </a>
      </header>
      <main>
        <Boards/>
      </main>
    </div>
  );
}

export default App;
