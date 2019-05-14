import React, { Component } from 'react';

class ListTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composing: false
    };
  }

  toggleComposer = () => {
    this.setState(prevState => ({
      composing: !prevState.composing
    }));
  }

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
          { this.state.composing ?
            <form>
              <textarea autoFocus></textarea>
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
