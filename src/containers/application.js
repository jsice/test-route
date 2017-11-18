import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

const ApplicationsDetail = ({ match }) => (
  <div>
    Applications Detail
    <ul>
      <li><Link to="/request/application/hashkey">Screen new tenants</Link></li>
    </ul>
  </div>
)

const Applications = ({ match }) => (
  <div>
    Applications
    <ul>
      <li><Link to={`${match.url}/hashkey`}>Application Detail</Link></li>
      <li><Link to="/request/application/hashkey">Screen new tenants</Link></li>
    </ul>
  </div>
)

const AppCon = ({ match }) => (
  <div>
    <ul>
      <li><Link to="/request"><button>Add new listing</button></Link></li>
      <li><Link to="/properties">Applications</Link></li>
      <li><Link to="/getting-started">Getting Started</Link></li>
    </ul>
    <hr />

    <Switch>
      <Route exact path={`${match.url}`} component={Applications} />
      <Route path={`${match.url}/hashkey`} component={ApplicationsDetail} />
    </Switch>
  </div>
)

export default AppCon
