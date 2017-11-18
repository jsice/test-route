import React, { Component } from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import AppCon from './application'
import { ReqCon } from './request'
import GettingStarted from './getting-started'

const NotFound = () => (
  <div>
    404 Not Found
  </div>
)

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/properties"/>
          <Route path="/properties" component={AppCon} />
          <Route path="/request" component={ReqCon} />
          <Route path="/getting-started" component={GettingStarted} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}