import React, { Component } from 'react';
import ListTile from './ListTile';
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lists: [] };
    this.boardId = this.props.match.params.boardId;
  }

  componentDidMount() {
    fetch(`/boards/${this.boardId}`)
      .then(res => res.json())
      .then((board) => {
        this.setState({
          name: board.name,
          lists: board.lists
        });
    });
  }

  render() {
    return (
      <div className="Board">
        <header>
          <h1>
            {this.state.name}
          </h1>
        </header>
        <ul>
          {
            this.state.lists.map((list) => {
              return (
                <ListTile
                  key={list.id}
                  id={list.id}
                  title={list.title}
                  boardId={this.boardId}
                  cards={list.cards}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Board;
