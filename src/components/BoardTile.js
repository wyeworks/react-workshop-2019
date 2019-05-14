import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BoardTile extends Component {
  render() {
    return (
      <li className="BoardTile">
        <Link to={`/boards/${this.props.id}`}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}

export default BoardTile;
