import React from 'react'
import { Link } from 'react-router-dom'
export default props => {
  const { routers } = props
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {routers.map(router => {
          return (
            <li key={router.path} className="sidebar-item">
              <Link to={`${router.path}`}>{router.name}</Link>
            </li>
          )
        })}
      </ul>
      
    </div>
  )
}