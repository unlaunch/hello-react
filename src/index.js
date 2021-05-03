import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import {asyncWithUnlaunchProvider}  from 'unlaunch-react-client-sdk';

// uncomment commented lines for testing Asynchoronous Unlaunch Client initialization

(async () => {

    const ULProvider = await asyncWithUnlaunchProvider({
        flagKeys: ['flag-2'],// Flag key set
        apiKey: 'prod-server-c2e168e2-5a2d-4b94-a645-91f955156c50',
        identity: '123', // Use special anonymous identity which generates a unique UUID
        attributes:{"name":"abc"},
        options: {
            localStorage: false
        }
    })
    
    ReactDOM.render(
        <ULProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
           </ULProvider> 
        , document.getElementById('root')
    );

    registerServiceWorker();
 })();