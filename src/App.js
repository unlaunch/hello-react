import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import { withUnlaunchProvider } from 'unlaunch-react-client-sdk'
import ClientTest from './components/ClientTest';
import ConsumerTest from './components/ConsumerTest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Unlaunch React SDK Testing App</h1>
        </header>
        <div className="menu">
          <ul>
            <li> <Link to="/">Sync/Async HoC Test</Link> </li>
            <li> <Link to="/consumer">Consumer</Link> </li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={ClientTest} />
            <Route path="/consumer" component={ConsumerTest} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

// Uncomment these line for testing synchoronous Unlaunch Client initialization
// App = withUnlaunchProvider({
//   flagKeys: ['flag-2'],// Flag key set
//   apiKey: 'prod-server-c2e168e2-5a2d-4b94-a645-91f955156c50',
//   identity: '123', // Use special anonymous identity which generates a unique UUID
//   attributes: { "name": "abc" },
//   options: {
//     localStorage: false
//   }
// })(App)
export default App;
