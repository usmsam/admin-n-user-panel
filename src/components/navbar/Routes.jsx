import React from 'react'
import './Routes.css';
import {Link} from 'react-router-dom';
const Routes = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">all</Link></li>
        <li><Link to="/processing">process</Link></li>
        <li><Link to="/finished">finished</Link></li>
       
      </ul>
    </div>
  )
}

export default Routes