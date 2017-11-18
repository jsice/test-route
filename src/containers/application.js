import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Menu from './menu'

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
    <Menu />

    <Switch>
      <Route exact path={`${match.url}`} component={Applications} />
      <Route path={`${match.url}/hashkey`} component={ApplicationsDetail} />
    </Switch>
  </div>
)

export default AppCon
