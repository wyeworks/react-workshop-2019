import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <header>
          <h1>
            BoardId: {this.props.match.params.boardId}
          </h1>
        </header>
      </div>
    );
  }
}

export default Board;
