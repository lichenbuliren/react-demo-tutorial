import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
              <Route exact path='/' render={() => (
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                  <Link to="demo">demo</Link>
                </p>
              )} />
              <Route path="/demo/:path" render={({ match }) => {
                let RouteComponent
                let matchRouter
                let result
                routers.forEach(router => {
                  if (router.path === match.params.path) {
                    RouteComponent = router.component
                    matchRouter = router
                  }
                })
                
                if (matchRouter) {
                  result = (
                    <React.Fragment>
                      <h4>{matchRouter.name}</h4> 
                      <RouteComponent routes={matchRouter.routes || [] } />
                    </React.Fragment>
                  )
                }
                return result || <p>Not Found</p>
              }} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
