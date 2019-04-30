import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  titleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('/boards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: {
          name: this.state.title
        }
      }),
    }).then(res => res.json()).then((board) => {
      this.props.history.push(`/boards/${board.id}`);
    });
  }

  render () {
    return (
      <div className="NewBoard">
        <form onSubmit={this.handleSubmit}>
          <div className="tile">
            <Link to='/' class="close-button">
              <span className="icon" />
            </Link>
            <input placeholder="Add board title" value={this.state.title} onChange={this.titleChange} />
          </div>
          <button type="">Create Board</button>
        </form>
      </div>
    );
  }
}

export default NewBoard;
