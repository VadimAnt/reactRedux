import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import AppRouter from './routes';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('app')
    );
};

    render(AppRouter);
    if(module.hot){
        module.hot.accept('./routes', () => {
           require('./routes');
           render(AppRouter);
        });
    }



