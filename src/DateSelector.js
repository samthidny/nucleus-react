import React from 'react';
import { useRef, useEffect } from 'react';

export default function DateSelector( {title, onDateChange} ) {

  const wc = useRef();

  function calendarChangeHandler(event) {
    console.log('Calendar Changed! ' + event.target.selectedDate);
    onDateChange(event.target.selectedDate);
  }

  useEffect(() => {
    console.log('useEffect ' + wc);
    wc.current.addEventListener('change', calendarChangeHandler);
    const xx = wc;
    return () => {
      // Called when component unmounts
      if (xx.current) {
        xx.current.removeEventListener('change', calendarChangeHandler);
      }
    }
  });

  return (
    <div>
      <h2>DateSelector: {title}</h2>
      <ns-calendar ref={wc}></ns-calendar>
    </div>
  );
}



