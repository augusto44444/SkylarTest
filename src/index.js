import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import promise from 'redux-promise'
import reducers from './reducers'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import * as serviceWorker from './serviceWorker';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './MainCss.css'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'))