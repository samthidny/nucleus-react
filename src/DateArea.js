import React from 'react';
import { useState } from 'react';
import Calendar from './Calendar';
import { useSelector, useDispatch } from 'react-redux'

export default function DateArea() {
  //const [currentDate, setCurrentDate] = useState( new Date() );
const dispatch = useDispatch(); 

  const currentDate = useSelector((state) => {
    return state.currentDate;
  });

  function dateChangeHandler(date) {
    console.log('App date changed ' + date);
    //setCurrentDate(date);
    dispatch({ 
      type: 'DATE_CHANGE',
      date: date
    })
  }

  return (
    <div>
      <Calendar onDateChange={dateChangeHandler} />
      <h2>{currentDate.toString()}</h2>
    </div>
  );
}
