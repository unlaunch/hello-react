import React,{Component} from 'react';
import { withUnlaunchProvider, Consumer } from 'unlaunch-react-client-sdk'

class ClientTest extends Component {

  render() {
    return (
      <div>
        <Consumer>
          {
            context => (
              <>
              <h3>Unlaunch Client Test Page (Sync / Async)</h3>
              <p>Variation Received after evaluation from Context API: {context.flags['flag-2']}</p>
              </>
          )
        }
        </Consumer>
      </div>
    );
  }
}

export default ClientTest;