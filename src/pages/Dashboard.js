
import React from 'react'
import Info from '../components/Info/Info'
import Repos from '../components/Repos/Repos'
import Search from '../components/Search/Search'
import User from '../components/User/User'

const Dashboard = () => {
  return (
    <main>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </main>
  )
}

export default Dashboard

