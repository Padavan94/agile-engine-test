import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from "./reducers/index"
import thunk from 'redux-thunk';
import './index.scss';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
