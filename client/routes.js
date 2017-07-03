import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { syncHistoryWuthStore } from 'redux-devtools-extension';

import  App from './views/app';
import Home from './views/home';

export default () => {
    return (
        <BrowserRouter>
            <App>
                <Route path="/home" component={Home} />
            </App>
        </BrowserRouter>
    );
}

