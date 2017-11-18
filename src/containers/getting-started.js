import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Menu from './menu'

const GettingStarted = ({ match }) => (
  <div>
    <Menu />
    Welcome to your Dashboard!
  </div>
)

export default GettingStarted