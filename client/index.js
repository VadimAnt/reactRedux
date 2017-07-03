import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { store } from './create-store';


import AppRouter from './routes';



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



