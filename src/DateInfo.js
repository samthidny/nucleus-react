import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function DateInfo() {
  //const [currentDate, setCurrentDate] = useState( new Date() );
const dispatch = useDispatch(); 

  const currentDate = useSelector((state) => {
    return state.currentDate;
  });


  return (
    <div>
      <h2>I am the Date Info component</h2>
      <h3>{currentDate.toString()}</h3>
    </div>
  );
}
