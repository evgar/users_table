import React from "react";
import ReactDOM from "react-dom";
import { createStore} from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import data from "./data";
import registerServiceWorker from "./registerServiceWorker";

export const reducer = (state = data, action) => {
	if (action.type === "EDIT_ITEM") {
		const updatedItems = [...state];
		updatedItems[action.id] = action.user;
		return updatedItems;
	}

	if (action.type === "DELETE_ITEM") {
		const updatedItems = state.filter((item, i) => i !== action.id);
		return updatedItems;
	}

	return state;
};

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
