import React from 'react'
import Header from './Header';
import DateSelector from './DateSelector';
import DateInfo from './DateInfo';

import { useSelector, useDispatch } from 'react-redux'

export default function Main() {


  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)

  const startDateChangeHandler = (date) => {
    console.log('App startDateChangeHandler ' + date);
    dispatch({ 
      type: 'START_DATE_CHANGE',
      date: date
    })
  }

  const endDateChangeHandler = (date) => {
    console.log('App endtDateChangeHandler ' + date);
    dispatch({ 
      type: 'END_DATE_CHANGE',
      date: date
    })
  }

  const clickHandler = () => {
    console.log('Click');
    dispatch({ 
      type: 'INC_COUNT'
    })
  }

  return (
    <div>
      <Header />
      <h2>Counter {counter}</h2>
      <button onClick={clickHandler}>CLICK ME</button>
      <DateSelector title="Start Date" name="startDate" onDateChange={startDateChangeHandler} />
      <DateSelector title="End Date" name="endDate" onDateChange={endDateChangeHandler}  />
      <DateInfo />
    </div>
  )
}
