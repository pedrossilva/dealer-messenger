import React, { Component } from 'react'

import './SortBy.scss'

class SortBy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      selected: null
    }
  }

  render() {
    const {change} = this.props

    const show = () => this.setState({active: !this.state.active})
    const select = (param => {
      this.setState({selected: param})
      show()
      return change(param)
    }).bind(this)

    const className = param => ['dropdown-item', this.state.selected === param ? 'is-active':''].join(' ')

    return (
      <div className={"dropdown sort-by "+(this.state.active ? 'is-active':'')}>
        <div className="dropdown-trigger">
          <button className="button" aria-haspopup="true" aria-controls="dropdown-menu" onClick={show}>
            <span>Sort by: </span>
            <span className="sort-by-selected"> {this.state.selected}</span>
            <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a className={className('name')} onClick={() => select('name')}>
              Name
            </a>
            <a className={className('recipients')} onClick={() => select('recipients')}>
              Recipients
            </a>
            <a className={className('opened')} onClick={() => select('opened')}>
              Opened
            </a>
            <a className={className('cta')} onClick={() => select('cta')}>
              CTA
            </a>
            <a className={className('responses')} onClick={() => select('responses')}>
              Responses
            </a>
            <a className={className('messages')} onClick={() => select('messages')}>
              Messages
            </a>
          </div>
        </div>
      </div>
    )
  }

}

export  default SortBy