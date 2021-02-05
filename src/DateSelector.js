import React from 'react';
import Calendar from './Calendar';
import { useSelector, useDispatch } from 'react-redux'

export default function DateSelector( {title, onDateChange} ) {
  //const [currentDate, setCurrentDate] = useState( new Date() );
const dispatch = useDispatch(); 


  function dateChangeHandler(date) {
    console.log('DateSelector date changed ' + date);
    // //setCurrentDate(date);
    // dispatch({ 
    //   type: 'DATE_CHANGE',
    //   date: date
    // })

    if(onDateChange) {
      onDateChange.call(this, date);
      // console.log('onDateChange found!');
    }

  }

  return (
    <div>
      <h2>XXX {title}</h2>
      <Calendar name='testname' onDateChange={dateChangeHandler} />
      
    </div>
  );
}
