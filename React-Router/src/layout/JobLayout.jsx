import React from 'react'
import {Outlet} from 'react-router-dom'

const JobLayout = () => {
  return (
    <div>
      <he>Job Openings</he>
      <p>List of current openings in our company</p>
      <Outlet/>
    </div>
  )
}

export default JobLayout
