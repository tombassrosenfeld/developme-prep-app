import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Map} from 'immutable';
import { createStore, compose } from "redux";
import {
  combineReducers
} from 'redux-immutable';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { persistStore, autoRehydrate } from 'redux-persist-immutable'
import { Provider } from "react-redux";
import reducer from "./data/reducer";
import HttpsRedirect from 'react-https-redirect';
import './css/output.css';

// import necessary to make asynchronous actions using thunks, for API calls
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const persistConfig = {
  key: 'root',
  storage,
}

export const rootReducer = combineReducers({root: reducer});

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

let enhancer = autoRehydrate();

export const store = createStoreWithMiddleware(persistedReducer, enhancer);

export let persistor = persistStore(store)

ReactDOM.render(
	<HttpsRedirect>
		<Provider store={ store }>
			<App /> 
		</Provider>
	</HttpsRedirect>,
	document.getElementById('root')
);
