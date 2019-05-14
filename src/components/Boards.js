import React, { Component } from 'react';
import BoardTile from './BoardTile';
class Boards extends Component {

  constructor(props) {
    super(props);
    this.state = { boards: [] };
  }

  componentDidMount() {
    fetch("/boards").then(res => res.json()).then((boards) => {
      this.setState({ boards });
    });
  }

  render() {
    return (
      <div className="Boards">
        <header>
          <span className="icon" />
          <h2>Personal Boards</h2>
        </header>
        <ul>
          {
            this.state.boards.map((board) => {
              return <BoardTile key={board.id} id={board.id} name={board.name} />
            })
          }
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
