import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
      </div>
    )
  }
}