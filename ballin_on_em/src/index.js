import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer as rootReducer } from './reducer';
import thunk from 'redux-thunk';

import App from './App';

//Redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// step 1 create store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  //step 2 tell your app about your store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//Step 3 is to connect your store to your components
