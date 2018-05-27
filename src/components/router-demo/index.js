import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import ChildRoute1 from './ChildRoute1'
import ChildRoute2 from './ChildRoute2'

export default class RouterDemo extends React.Component {
  static defaultProps = {
    routes: []
  }

  render() {
    return (
      <React.Fragment>
        <Link to="/demo/router-demo/child1">child1</Link><br/>
        <Link to="/demo/router-demo/child2">child2</Link>
        
        <Switch>
          <Route exact path="/demo/router-demo" component={ChildRoute1}/>
          <Route path="/demo/router-demo/child1" component={ChildRoute1}/>
          <Route path="/demo/router-demo/child2" component={ChildRoute2}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export {
  ChildRoute1,
  ChildRoute2
}