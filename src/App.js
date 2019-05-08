import React from 'react';
import Boards from './components/Boards';
import Board from './components/Board';
import NewBoard from './components/NewBoard';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App-container">
        <header>
          <Link to="/">
            <span className="logo" />
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Boards} />
            <Route path='/boards/new' component={Boards} />
            <Route path='/boards/:boardId' component={Board} />
          </Switch>
          <Route path='/boards/new' component={NewBoard} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
