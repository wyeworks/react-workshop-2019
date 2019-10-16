import React, { Component } from 'react';
import ListTile from './ListTile';
import { Socket } from 'phoenix-socket';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lists: [] };
    this.boardId = this.props.match.params.boardId;
    this.setUpChannel();
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

  setUpChannel() {
    let socket = new Socket("ws://localhost:4000/socket");
    socket.connect();

    let channel = socket.channel(`board:${this.boardId}`);

    channel.join();
    channel.on("user_created_card", ({ cards, list_id }) => {
      let lists = this.state.lists;
      let updatedList = lists.find(list => list.id === list_id);
      updatedList.cards = cards;

      this.setState({ lists });
    });

    this.channel = channel;
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
                  channel={this.channel}
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
