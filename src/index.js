import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import data from './data'
import registerServiceWorker from './registerServiceWorker';

// const initialState = data.map((item, i) => ({
// 	...item,
// 	id: i + 1
// }));

// const initialState = {
// 	items: items,
// }

// const initialState = {
// 	isOpen: false,
// };

export const reducer = (state = data, action) => {
	if (action.type === 'EDIT_USER') {
		const updatedUsers = [...state]
		updatedUsers[action.id] = action.user
		return updatedUsers

	}

	// if (action.type === 'CANCEL_EDIT') {
	// 	return state
	// }
	//
	return state;
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
