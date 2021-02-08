import DateSelector from './DateSelector';
import DateInfo from './DateInfo';

import { useDispatch } from 'react-redux'

export default function Main() {

  const dispatch = useDispatch();

  const startDateChangeHandler = (date) => {
    dispatch({
      type: 'START_DATE_CHANGE',
      date: date
    })
  }

  const endDateChangeHandler = (date) => {
    dispatch({ 
      type: 'END_DATE_CHANGE',
      date: date
    })
  }

  const clickHandler = () => {
    dispatch({ 
      type: 'INC_COUNT'
    })
  }

  return (
    <div>
      <DateSelector title="Start Date" name="startDate" onDateChange={startDateChangeHandler} />
      <DateSelector title="End Date" name="endDate" onDateChange={endDateChangeHandler}  />
      <button onClick={clickHandler}>CLICK ME</button>
      <DateInfo />
    </div>
  )
}
