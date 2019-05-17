import React, { Component } from 'react';
import BoardTile from './BoardTile';
import { Link } from 'react-router-dom';

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
            <Link className="NewBoardLink" to='/boards/new'>
              Create new board…
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Boards;
