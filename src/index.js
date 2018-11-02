import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import rootSaga from './sagas'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, 
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga)
ReactDOM.render(
    <Provider store={store}>
        <App/ >
	</Provider>,
	document.getElementById('root')
)
serviceWorker.unregister();