import React, { Component } from 'react'
import SortBy from '../sort-by/SortBy'

import './Campaigns.scss'

class Campaigns extends Component {

  constructor() {
    super()
    this.initState()
    this.sortBy = this.sortBy.bind(this)
  }

  render() {

    const campaigns = this.state.campaigns;
    const k = this.state.sortBy;
    campaigns.sort((a, b) => {
      if(a[k] > b[k]) return 1
      if(a[k] < b[k]) return -1
      return 0
    })

    const showAll = () => this.setState({showAll: true})

    return (
      <div>
        <h1 className="list-title">Latest Campaigns <SortBy change={this.sortBy} /></h1>

        <div className="wrap-list">
          <table>
            <thead>
              <tr>
                <th width="30%">Campaign title</th>
                <th width="12%">Recipients</th>
                <th width="12%">Opened</th>
                <th width="12%">CTA</th>
                <th width="12%">Responses</th>
                <th width="12%">New messages</th>
              </tr>
            </thead>
            <tbody>
            {this.state.campaigns.map((c, i) => (
              <tr key={i}>
                <td>
                  <div className="item-title">{c.name}</div>
                  <span className="item-desc">{c.datetime}</span>
                </td>
                <td>{c.recipients}</td>
                <td>{c.opened}%</td>
                <td>{c.cta}%</td>
                <td>{c.responses}%</td>
                <td>
                  {c.messages ? <span className="circle-val">{c.messages}</span> : <span className="dot"></span>}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="link-show-all">
          <a onClick={showAll}>See all campaigns <i className="fas fa-long-arrow-alt-right"></i></a>
        </div>
      </div>
    )
  }

  sortBy(param) {
    this.setState({sortBy: param})
  }

  initState() {
    this.state = {
      sortBy: null,
      showAll: false,
      campaigns: [
        {
          name: 'Hyundai i40 Campaign',
          datetime: 'Sent on 15 May 2017 at 08:34 AM',
          recipients: 1.896,
          opened: 41,
          cta: 39,
          responses: 45,
          messages: 0
        },
        {
          name: 'New Hyundai Tucson Campaign',
          datetime: 'Sent on 14 May 2017 at 08:59 AM',
          recipients: 5.121,
          opened: 89,
          cta: 18,
          responses: 37,
          messages: 3
        },
        {
          name: 'Hyundai i30 Campaign',
          datetime: 'Sent on 10 May 2017 at 11:16 AM',
          recipients: 8.560,
          opened: 63,
          cta: 55,
          responses: 75,
          messages: 1
        },
        {
          name: 'Hyundai Santa Fe Sale Campaign',
          datetime: 'Sent on 23 April 2017 at 03:03 PM',
          recipients: 732,
          opened: 16,
          cta: 78,
          responses: 9,
          messages: 0
        },
        {
          name: 'Hyundai Premium Campaign',
          datetime: 'Sent on 17 April 2017 at 6:28 PM',
          recipients: 64,
          opened: 72,
          cta: 25,
          responses: 51,
          messages: 24
        }
      ]
    }
  }

}

export default Campaigns
