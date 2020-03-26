import React, { Component } from 'react'

class DropDown extends Component {
  state = {
    ddlClass: 'share-dropdown ',
    ddlModel: null
  };
  ddlToggle = () => {
    const { ddlClass } = this.state
    let enabled = ddlClass.includes('enabled') ? 1 : 0
    this.setState({
      ddlClass: enabled
        ? ddlClass.replace('enabled', '')
        : ddlClass + 'enabled'
    })
  };
  itemSelected = (item) => {
    this.setState({ ddlModel: item })
    this.ddlToggle()
    if (this.props.returnIndex) {
      this.props.onItemChange(this.props.items.indexOf(item))
    } else {
      this.props.onItemChange(item)
    }
  };

  render() {
    const { items, textValue } = this.props
    return (
      <React.Fragment>
        <div className={this.state.ddlClass}>
          <button
            className='share-button share-rounded share-dropdown-toggle share-primary-bg'
            onClick={this.ddlToggle}
            data-toggle='dropdown'
          >
            {textValue}
          </button>
          <div className='share-dropdown-menu'>
            {items.map((item) => (
              <a
                onClick={() => this.itemSelected(item)}
                className='share-dropdown-menu-item'
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default DropDown
