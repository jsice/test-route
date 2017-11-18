import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const ApplicationsDetail = ({ match }) => (
  <div>
    Applications Detail
    <ul>
      <li><Link to="/request/application/hashkey">Screen new tenants</Link></li>
    </ul>
  </div>
)

export default ApplicationsDetail