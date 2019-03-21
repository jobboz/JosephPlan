import  React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));
//the middleware enhances the store functionality
//provider allows how application to have access to the store


ReactDom.render(<Provider store = {store} >< App /> </Provider>, document.getElementById('root'));
serviceWorker.unregister();
