import DateSelector from './DateSelector';
import DateInfo from './DateInfo';

import { useDispatch } from 'react-redux'
import Form from './Form';
import UserSummary from './UserSummary';

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
    <main className="ndsn">
      <ns-panel>
        <Form />
        <UserSummary />
        <DateInfo />
      </ns-panel> 
      <ns-panel>
        <ns-tabs>
          <ns-tab slot="tab" selected="true">Start Date</ns-tab>
            <ns-panel slot="panel">
              <div>
                <DateSelector title="Start Date" name="startDate" onDateChange={startDateChangeHandler} />
              </div>
            </ns-panel>
          <ns-tab slot="tab">End Date</ns-tab>
            <ns-panel slot="panel">
              <div>
                <DateSelector title="End Date" name="endDate" onDateChange={endDateChangeHandler} />
              </div>
            </ns-panel>
          <ns-tab slot="tab">Counter</ns-tab>
            <ns-panel slot="panel">
              <div>
                <button onClick={clickHandler}>CLICK ME</button>
              </div>
              <ns-cta onClick={clickHandler}>Hello</ns-cta>
            </ns-panel>
          <ns-tab slot="tab">User Details</ns-tab>
          <ns-panel slot="panel">
              <Form />
            </ns-panel>
        </ns-tabs>
      </ns-panel>
    </main>
  )

}
