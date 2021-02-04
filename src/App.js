import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Calendar from './Calendar';
import { useState } from 'react';
import Header from './Header';
import DateArea from './DateArea';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

function reducer(state, action) {
  console.log('REDUCER heard ' + action.type + ' setting date to ' + action.date);
  return  { currentDate: action.date || new Date() };
}

const INITIAL_STATE = {
  currentDate: new Date()
};

const store = createStore(reducer, INITIAL_STATE);

function App() {

  const [currentDate, setCurrentDate] = useState( {
    currentDate: new Date()
  });
  const createStoreWithMiddleware = applyMiddleware()(createStore);

  //const currentDate = new Date();

  function dateChangeHandler(date) {
    console.log('App date changed ' + date);
    setCurrentDate(date);
  }

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <DateArea />
      </div>
    </Provider>
  );
}

export default App;
