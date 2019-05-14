import React, { Component } from 'react';

class Boards extends Component {
  render() {
    return (
      <div className="Boards">
        <header>
          <span className="icon" />
          <h2>Personal Boards</h2>
        </header>
        <ul>
          <li className="BoardTile">
            <a>
              Workshop
            </a>
          </li>
          <li className="BoardTile">
            <a>
              Team
            </a>
          </li>
          <li>
            <a className="NewBoardLink">
              Create new board…
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Boards;
