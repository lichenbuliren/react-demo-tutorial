import React from 'react'
import { Link } from 'react-router-dom'
import ChildRoute1 from './ChildRoute1'
import ChildRoute2 from './ChildRoute2'
import RouteWithSubRoutes from '../RouteWithSubRoutes'

export default class RouterDemo extends React.Component {
  static defaultProps = {
    routes: []
  }

  render() {
    const { routes } = this.props
    console.log(routes)
    return (
      <React.Fragment>
        <Link to="/demo/router-demo/child1">child1</Link><br/>
        <Link to="/demo/router-demo/child2">child2</Link>
        
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </React.Fragment>
    )
  }
}

export {
  ChildRoute1,
  ChildRoute2
}