import React from 'react';
import { useRef, useEffect } from 'react';

export default function Calendar({onDateChange}) {

  const wc = useRef();

  function calendarChangeHandler(event) {
    console.log('Calendar Changed! ' + event.target.selectedDate);
    onDateChange(event.target.selectedDate);
  }

  useEffect(() => {
    console.log('useEffect ' + wc);
    wc.current.addEventListener('change', calendarChangeHandler);
  });

  return (
    <div>
      <h2>React Calendar</h2>
      <ns-calendar ref={wc}></ns-calendar>
    </div>
  )
}
