import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Root } from './styles'

const Dashboard = () => {
  return (
    <Root>
      Lighthouse Account Dashboard

      <Link to='/landing'>
        Return to Landing
      </Link>
    </Root>
  )
}

export default Dashboard
