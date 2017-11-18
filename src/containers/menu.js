import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Applications from './application'
import { ReqCon } from './request'

export default class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/request"><button>Add new listing</button></Link></li>
          <li><Link to="/properties">Applications</Link></li>
          <li><Link to="/getting-started">Getting Started</Link></li>
        </ul>
        <hr />
        
        <Route path="/properties" component={Applications} />
        <Route path="/request" component={ReqCon} />
                
        
      </div>
    )
  }
}