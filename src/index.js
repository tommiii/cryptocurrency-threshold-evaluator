import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cryptocurrencyThresholdEvaluatorApp from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(cryptocurrencyThresholdEvaluatorApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
