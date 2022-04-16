import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Root } from './styles'

const Dashboard = () => {
  return (
    <Root>
      <h1>Lighthouse Account Dashboard</h1>

      <div>
        Client Side Routing (doesn&apos;t work with rewrites):
      </div>
      <Link to='/landing'>
        Return to Landing
      </Link>

      <br />

      <div>
        Standard Routing:
      </div>
      <a href='/landing'>
        Return to Landing
      </a>
    </Root>
  )
}

export default Dashboard
