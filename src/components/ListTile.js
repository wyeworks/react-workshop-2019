import React, { Component } from 'react';

class ListTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      newCardText: '',
      composing: false
    };
  }

  toggleComposer = () => {
    this.setState(prevState => ({
      composing: !prevState.composing
    }));
  }

  newCardTextChange = (e) => {
    this.setState({
      newCardText: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/lists/${this.props.id}/cards`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: this.state.newCardText
      }),
    }).then(res => res.json()).then((card) => {
      this.setState(prevState => ({
        composing: false,
        cards: [...prevState.cards, card],
        newCardText: ''
      }))
    });
  }

  render() {
    return (
      <div className="ListTile">
        <div className="ListTile-content">
          <h2>
            {this.props.title}
          </h2>
          <ol>
            {
              this.state.cards.map((card) => {
                return (
                  <li key={card.id}>
                    {card.text}
                  </li>
                )
              })
            }
          </ol>
          { this.state.composing ?
            <form onSubmit={this.handleSubmit}>
              <textarea autoFocus value={this.state.newCardText} onChange={this.newCardTextChange}></textarea>
              <input type="submit" value="Add"/>
              <button onClick={this.toggleComposer}>
                <span className="icon" />
              </button>
            </form>
          :
            <div onClick={this.toggleComposer}>Add a card…</div>
          }
        </div>
      </div>
    );
  }
}

export default ListTile;
