import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const GettingStarted = ({ match }) => (
  <div>
    <ul>
      <li><Link to="/request"><button>Add new listing</button></Link></li>
      <li><Link to="/properties">Applications</Link></li>
      <li><Link to="/getting-started">Getting Started</Link></li>
    </ul>
    <hr />
    Welcome to your Dashboard!
  </div>
)

export default GettingStarted