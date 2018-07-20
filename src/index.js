import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./data/reducer";
import HttpsRedirect from 'react-https-redirect';
import './css/output.css';

// import necessary to make asynchronous actions using thunks, for API calls
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <HttpsRedirect>
		<Provider store={ store }>
				<App /> 
		</Provider>,
    </HttpsRedirect>
	document.getElementById('root')
);
