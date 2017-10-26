import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./data/reducer";
import './css/output.css';

// import necessary to make asynchronous actions using thunks, for API calls
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getModules } from "./data/actions";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
// Thunks
store.dispatch(getModules());

ReactDOM.render(
	<Provider store={ store }>
		<App /> 
	</Provider>,

	document.getElementById('root')
);
