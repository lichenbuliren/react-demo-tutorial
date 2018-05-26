import React from 'react'
import { Link, Route } from 'react-router-dom'
import ChildRoute1 from './ChildRoute1'
import ChildRoute2 from './ChildRoute2'

export default class RouterDemo extends React.Component {
  static defaultProps = {
    routes: []
  }

  render() {
    const { routes } = this.props
    return (
      <React.Fragment>
        <Link to="/demo/router-demo/child1">child1</Link><br/>
        <Link to="/demo/router-demo/child2">child2</Link>
        
        <Route path="/demo/:item/:child" render={({ match }) => {
          const { params: { item, child } } = match
          let ChildComponent
          routes.forEach(route => {
            if (route.path === child) ChildComponent = route.component
          })
          return <ChildComponent />
        }} />
      </React.Fragment>
    )
  }
}

export {
  ChildRoute1,
  ChildRoute2
}