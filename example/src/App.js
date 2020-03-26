import React, { Component } from 'react'

import share from 'share'
import './css/share.min.css'

export default class App extends Component {
  state = {
    loading: false,
    snackbar: false,
    sidenav: false,
    modal: false,
    to: null
  };

  handleItemChange= (item) => {
    this.setState({to: Number(item) === NaN ? '3' : String(item)})
  }
  render() {
    return (
      <div>
        {/* Loading Example */}
        <button
          className='share-button share-accent-bg'
          onClick={() => this.setState({ loading: true })}
        >
          Show Loading
        </button>
        <share.Loading present={this.state.loading} />
        <button
          className='share-button share-accent-bg'
          onClick={() => this.setState({ snackbar: !this.state.snackbar })}
        >
          Show snackbar
        </button>
        {this.state.snackbar && (
          <share.Snackbar fadeIn='20' message='hello' duration='3000' />
        )}
        <button
          className='share-button share-accent-bg'
          onClick={() => this.setState({ sidenav: !this.state.sidenav })}
        >
          Show Navbar
        </button>
        <share.Sidenav
          buttonText='close'
          present={this.state.sidenav}
          onDismissClicked={() =>
            this.setState({ sidenav: !this.state.sidenav })
          }
          right='true'
          insideText='Sed vel urna ac purus luctus convallis venenatis eget magna. Proin
            vestibulum feugiat dictum. Duis vehicula, arcu vitae dapibus
            tincidunt, dui leo pulvinar nibh, a suscipit ex purus in sem. Fusce
            auctor tincidunt arcu. Integer placerat sem vel ipsum vehicula, vel
            luctus erat pretium. In egestas erat eros, in pellentesque orci
            imperdiet ut. Suspendisse aliquam hendrerit risus a vestibulum.'
        />
        <button
          className='share-button share-accent-bg'
          onClick={() => this.setState({ modal: !this.state.modal })}
        >
          Show modal
        </button>
        <share.Modal
          content={
            <div className='share-grid share-responsive'>
              <div className='share-gu-1-5 share-p-1'>Hi</div>
              <div className='share-gu-1-5 share-p-1'>There</div>
              <div className='share-gu-1-5 share-p-1'>You</div>
              <div className='share-gu-1-5 share-p-1'>Big</div>
              <div className='share-gu-1-5 share-p-1'>Fella</div>
            </div>
          }
          dismissButtonText='dismiss'
          present={this.state.modal}
          onDismissClicked={() => this.setState({ modal: !this.state.modal })}
        />
        <share.Slide
          heading='click me'
          content={
            <div>
              <p>Hi</p>
              <p>Toggle</p>
              <p>This</p>
              <p>Content!</p>
            </div>
          }
        />

        <share.DropDown
          items={['one', 'two', 'three', 'ffff']}
          textValue='menu'
          onItemChange={(item) => this.handleItemChange(item)}
          returnIndex={true}
        />

        <share.ScrollTo
          duration={1500}
          delay={100}
          offset={0}
          smooth={true}
          to={this.state.to}
        />
      </div>
    )
  }
}
