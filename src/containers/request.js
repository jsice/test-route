import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
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
    </ul>
  </div>
)

export const ReqCon = ({ match }) => (
  <div>
    <Switch>
      <Route exact path={`${match.url}`} component={Request} />
      <Route path={`${match.url}/application/hashkey`} component={ReqApp} />
    </Switch>
  </div>
)