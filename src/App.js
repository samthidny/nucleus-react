import './App.css';
import DefaultReducer from './reducers/DefaultReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Main from './Main';

const INITIAL_STATE = {
  startDate: new Date(),
  endDate: new Date(),
  counter: 0
};

function App() {

  const store = createStore(DefaultReducer, INITIAL_STATE);

  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
