import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Header, Sidebar, LifeStyle, RouteWithSubRoutes } from './components'
import routers from './routers'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Sidebar routers={routers} />
            <div className="content">
              <Switch>
                <Route exact path="/" render={() => (
                  <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    <Link to="/demo">demo</Link>
                  </p>
                )} />
                <Switch>
                  <Route exact path="/demo" component={LifeStyle}/>
                  {routers.map(router => {
                    return <Route key={router.path} path={router.path} component={() => RouteWithSubRoutes(router)} />
                  })}
                </Switch>
                <Route render={() => <p>Not Found</p>}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
