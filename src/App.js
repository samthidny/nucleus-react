import './App.css';
import DefaultReducer from './reducers/DefaultReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Main from './Main';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MoveDate from './pages/MoveDate';
import MeterRead from './pages/MeterRead';
import Address from './pages/Address';
import Summary from './pages/Summary';

const INITIAL_STATE = {
  // startDate: new Date(),
  // endDate: new Date(),
  // counter: 0,
  // title: '',
  // firstname: '',
  // surname: '',
  address: '',
  postcode: '',
  moveDate: null,
  gasMeterReading: null,
  electricityMeterReading: null
};

function App() {

  const store = createStore(DefaultReducer, INITIAL_STATE);

  return (
    <Provider store={store}>
      <div className="App">
      <nsx-header></nsx-header>
      <Router>
          <Switch>
            <Route path="/main">
              <Main />
            </Route>
            <Route path="/move-date">
              <MoveDate />
            </Route>
            <Route path="/meter-read">
              <MeterRead />
            </Route>
            <Route path="/address">
              <Address />
            </Route>
            <Route path="/summary">
              <Summary />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
      <nsx-footer id="footer"></nsx-footer>
      </div>
    </Provider>
  );
}

export default App;
