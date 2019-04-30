import React from 'react';
import Boards from './components/Boards';
import Board from './components/Board';
import NewBoard from './components/NewBoard';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App-container">
        <div className="App-header">
          <Link className="App-header-logo" to="/">
            <span className="App-header-logo-default"></span>
          </Link>
        </div>
        <div className="App-content">
          <Switch>
            <Route exact path='/' component={Boards} />
            <Route path='/boards/new' component={Boards} />
            <Route path='/boards/:boardId' component={Board} />
          </Switch>
          <Route path='/boards/new' component={NewBoard} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
