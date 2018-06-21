import React, { Component } from 'react'

class Feed extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const {name, status, datetime, comment} = this.props

    return (
      <div className="feed">
        <div className="columns is-variable is-2 clear-v-margin">
          <div className="column is-narrow"><i className="far fa-comment-alt"></i></div>
          <div className="column">
            <div className="username">{name} <span>{status}</span></div>
            <div className="feed-datetime">
              {datetime}
              <a>reply <i className="fas fa-long-arrow-alt-right"></i></a>
            </div>
            <div className="comment">{comment}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feed