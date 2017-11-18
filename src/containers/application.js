import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import ApplicationsDetail from './properties-detail'


const Applications = ({ match }) => (
  <div>
    Applications
    <ul>
      <li><Link to={`${match.url}/hashkey`}>Application Detail</Link></li>
      <li><Link to="/request/application/hashkey">Screen new tenants</Link></li>
    </ul>

    <Route path={`${match.url}/hashkey`} component={ApplicationsDetail} />
  </div>
)

export default Applications
