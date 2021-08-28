import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotebooksReducer from './Services/Reducers/getNotebooks-Reducer';
import NotesReducer from './Services/Reducers/getNotes-Reducer';


const rootReducer = combineReducers({
  Notebooks: NotebooksReducer,
  Notes: NotesReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating redux store
const store = createStore(
  rootReducer,
  {
    Notebooks: 'loading',
    Notes: 'loading'

  },
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
