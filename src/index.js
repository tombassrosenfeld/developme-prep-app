import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Map} from 'immutable';
import { createStore, compose } from "redux";
import {
  combineReducers
} from 'redux-immutable';
import { Provider } from "react-redux";
import reducer from "./data/reducer";
import HttpsRedirect from 'react-https-redirect';
import './css/output.css';

// import necessary to make asynchronous actions using thunks, for API calls
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({root: reducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
	<HttpsRedirect>
		<Provider store={ store }>
				<App /> 
		</Provider>
	</HttpsRedirect>,
	document.getElementById('root')
);
