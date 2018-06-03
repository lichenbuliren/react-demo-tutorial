import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Header, Sidebar, AsyncComponent } from './components'
import routers from './routers'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const AsyncLifeStyle = AsyncComponent(() => import('./components/LifeStyle'))

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
                  <Route exact path="/demo" component={AsyncLifeStyle}/>
                  <Route path="/demo/lifeStyle" component={AsyncLifeStyle} />
                  <Route path="/demo/context-system" component={AsyncComponent(() => import('./components/ContextSystem'))} />
                  <Route path="/demo/refs-forward" component={AsyncComponent(() => import('./components/RefsForward'))} />
                  <Route path="/demo/portals" component={AsyncComponent(() => import('./components/Portals'))} />
                  <Route path="/demo/error-boundaries" component={AsyncComponent(() => import('./components/ErrorBoundary'))} />
                  <Route path="/demo/router-demo" component={AsyncComponent(() => import('./components/router-demo'))} />
                  <Route path="/demo/redux-form-demo" component={AsyncComponent(() => import('./components/redux-form-demo'))} />
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
