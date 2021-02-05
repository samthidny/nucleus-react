import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Calendar from './Calendar';
import { useState } from 'react';
import Header from './Header';

import DefaultReducer from './reducers/DefaultReducer';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import DateInfo from './DateInfo';
import Main from './Main';

// function reducer(state, action) {
//   console.log('App REDUCER heard ' + action.type + ' setting date to ' + action.date);
//   return  { startDate: state.date || new Date(), endDate: state.date || new Date()  };
// }

const INITIAL_STATE = {
  startDate: new Date(),
  endDate: new Date(),
  counter: 0
};



function App() {

  // const reducer = DefaultReducer
  const store = createStore(DefaultReducer, INITIAL_STATE);


  // const [currentDate, setCurrentDate] = useState( {
  //   startDate: new Date(),
  //   endDate: new Date()
  // });

  //const createStoreWithMiddleware = applyMiddleware()(createStore);

  //const currentDate = new Date();

  // function dateChangeHandler(date) {
  //   console.log('App date changed xxx ' + date);
  //   //setCurrentDate(date);
  //   store.startDate = date;
  // }

  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
