import React, { Component } from 'react';

class BoardTile extends Component {
  render() {
    return (
      <li className="BoardTile">
        <a>
          {this.props.name}
        </a>
      </li>
    );
  }
}

export default BoardTile;
