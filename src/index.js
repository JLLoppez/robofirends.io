import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { requestRobots, searchRobots } from './reducers'


const logger = createLogger();

const rootReducers = combineReducers({requestRobots, searchRobots});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
	<React.StrictMode>
		<Provider store={store}>
	   		<App/>
	  	</Provider>
	</React.StrictMode>
);
reportWebVitals();
