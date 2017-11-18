import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Applications from './application'

const ReqApp = ({ match }) => (
  <div>
    <br />
    Select one or more of the following actions

    <ul>
      <li><Link to="/request"><button>Previous</button></Link></li>
      <li><Link to="/properties">Dashboard</Link></li>
    </ul>
  </div>
)

const Request = ({ match }) => (
  <div>
    Property Address
    <ul>
      <li><Link to="/properties">Dashboard</Link></li>
      <li><Link to={`${match.url}/application/hashkey`}><button>Next</button></Link></li>

      <Route path={`${match.url}/:id/:hash`} component={ReqApp} />
    
    </ul>
  </div>
)

export const ReqCon = ({ match }) => (
  <Route path={} />
)