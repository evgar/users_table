import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import data from './data'
import registerServiceWorker from './registerServiceWorker';

// const initialState = {
// 	isOpen: false,
// };

export const reducer = (state = data, action) => {
	// switch (action.type) {
	//
	// }
	return state;
};

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
