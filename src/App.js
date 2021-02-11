import './App.css';
import DefaultReducer from './reducers/DefaultReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Main from './Main';
import Home from './pages/Home';

const INITIAL_STATE = {
  startDate: new Date(),
  endDate: new Date(),
  counter: 0,
  title: '',
  firstname: '',
  surname: ''
};

function App() {

  const store = createStore(DefaultReducer, INITIAL_STATE);

  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
