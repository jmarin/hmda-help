import React, { Component } from 'react'
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom'

import Search from './search/'
import Institution from './institution/'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <div className="App">
          <header>
            <h1 className="App-title">HMDA Help</h1>
            <nav>
              <Link to="/">Search</Link>
              <Link
                to={{
                  pathname: '/add',
                  state: {
                    institution: {
                      LEI: '',
                      taxId: '',
                      respondentName: ''
                    }
                  }
                }}
              >
                Add a new institution
              </Link>
            </nav>
          </header>
          <Route exact path="/" component={Search} />
          <Route exact path="/add" component={Institution} />
          <Route exact path="/update" component={Institution} />
        </div>
      </Switch>
    )
  }
}

export default App
