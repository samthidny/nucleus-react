import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function DateInfo() {
  //const [currentDate, setCurrentDate] = useState( new Date() );
const dispatch = useDispatch(); 

  const store = useSelector((store) => {
    return store;
  });


  // const currentDate = useSelector((state) => {
  //   return state.currentDate;
  // });


  return (
    <div>
      <h2>I am the Date Info component</h2>
      {/* <h3>Start: {store.startDate.toString()} End: {store.endDate.toString()}</h3> */}
    </div>
  );
}
