import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Sidebar } from './components'
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
                <Router exact={true} path='/' render={() => (
                  <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
                )} />
                <Route path="/demo/:path" render={({ match }) => {
                  let Component
                  let matchRouter
                  routers.forEach(router => {
                    if (router.path === match.params.path) {
                      Component = router.component
                      matchRouter = router
                    }
                  })
                  return (
                    <React.Fragment>
                      <h4>{matchRouter.name}</h4>
                      <Component />
                    </React.Fragment>
                  )
                }} />
              </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
