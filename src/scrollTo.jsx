import React, { Component } from 'react'
import { scroller } from 'react-scroll'

class ScrollTo extends Component {
  state = {
    cards: [
      { id: '1', text: 'one', color: 'red' },
      { id: '2', text: 'two', color: 'blue' },
      { id: '3', text: 'three', color: 'white' },
      { id: '4', text: 'four', color: 'black' }
    ],
    cardId: '0'
  };

  handleClick = () => {
    const {duration = 1500, delay = 100, smooth = true, offset = 0, to=this.state.cards[0].id} = this.props
    scroller.scrollTo(to, {
      duration,
      delay,
      smooth,
      offset
    })
  }

  render() {
    return (
      <div>
        <a className='share-button share-round-corners share-m-t-3 share-primary-bg'
          onClick={this.handleClick} >ScrollTo</a>
        {this.state.cards.map((card) => (
          <div id={card.id} key={card.id} style={{ backgroundColor: card.color, height: 500 }}>
            <h1>{card.text}</h1>
          </div>
        ))}

      </div>
    )
  }
}

export default ScrollTo
