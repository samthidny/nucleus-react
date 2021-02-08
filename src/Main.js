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

  // return (
  //   <div>
  //     <DateSelector title="Start Date" name="startDate" onDateChange={startDateChangeHandler} />
  //     <DateSelector title="End Date" name="endDate" onDateChange={endDateChangeHandler}  />
  //     <button onClick={clickHandler}>CLICK ME</button>
  //     <DateInfo />
  //   </div>
  // )

  return (
    <main className="ndsn">
      <h1>NDSN</h1> 
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
          <ns-tab slot="tab">Rewards</ns-tab>
        </ns-tabs>
      </ns-panel>


      <DateInfo />

    </main>
  )

}
