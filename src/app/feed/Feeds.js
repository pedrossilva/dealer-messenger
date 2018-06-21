import  React, { Component } from 'react'
import Feed from './Feed'

import './Feeds.scss'

class Feeds extends Component {
  render() {

    const feeds = this.getFeeds()

    return (
      <div className="feeds">
        <div className="box-title columns is-gapless">
          <div className="column">
            <h2 className="side-title">Notifications feed</h2>
            <div className="side-subtitle">Use filters to see a specific type of content</div>
          </div>
          <div className="column is-narrow">
            <button className="button is-white btn-search">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="btns-filter columns is-variable is-1">
          <div className="column">
            <button className="button is-primary">
              <i className="far fa-bell"></i>
            </button>
          </div>
          <div className="column">
            <button className="button is-light">
              <i className="far fa-comment-alt"></i>
            </button>
          </div>
          <div className="column">
            <button className="button is-light">
              <i className="fas fa-mobile-alt"></i>
            </button>
          </div>
          <div className="column">
            <button className="button is-light">
              <i className="far fa-hand-point-up"></i>
            </button>
          </div>
        </div>
        <div className="link-all-notifications">
          All notifications
        </div>
        <hr/>
        <div>
          <span className="dot"></span> Today
        </div>

        {feeds.map((feed, i) => <Feed key={i} {...feed}/>)}

      </div>
    )
  }

  getFeeds() {
    return [
      {
        name: 'Mike Copeland',
        status: 'wrote',
        datetime: '15 may 2017 at 11:34 AM',
        comment: "All l've got to do is pass as an ordinary human being. What could possibly go wrong? " +
        "I hate yogurt. It's just stuff with bits in."
      },
      {
        name: 'Flora Brady',
        status: 'wrote',
        datetime: '15 may 2017 at 10:12 AM',
        comment: "I'm not gonna be there to catch you every time you feel like jumping out."
      }
    ]
  }
}

export default Feeds
