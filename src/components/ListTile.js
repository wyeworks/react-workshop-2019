import React, { Component } from 'react';

class ListTile extends Component {
  render() {
    return (
      <div className="ListTile">
        <div className="ListTile-content">
          <h2>
            {this.props.name}
          </h2>
          <ol>
            {
              this.props.cards.map((card) => {
                return (
                  <li key={card.id}>
                    {card.text}
                  </li>
                )
              })
            }
          </ol>
          <div>Add a card…</div>
        </div>
      </div>
    );
  }
}

export default ListTile;
