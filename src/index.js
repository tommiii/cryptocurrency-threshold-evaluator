import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';
import cryptocurrencyThresholdEvaluatorApp from './reducers';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(cryptocurrencyThresholdEvaluatorApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
