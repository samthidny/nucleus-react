import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

export default function MoveDate() {

  const moveDate = useSelector(state => state.moveDate);
  const form = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    form.current.addEventListener('submit', (event) => {
      const validation = event.currentTarget.validate();
      console.log('Submit form ' + validation);
      if (validation.isValid) {
        dispatch({type: 'UPDATE_MOVE_DATE', value: validation.fieldsByName['movedate'].value});
        history.push("/meter-read");
      }
    });
  });

  return (
    <div>
      <ns-panel>
        <div className="splash">
          <div>
            <ns-cta id="back-button" type="text" href="javascript:history.back()" icon="arrow-left" loading="false">Go back</ns-cta>
          </div><br/><br/>
          <h1 className="h2">Your move date</h1>
          <ns-form className="loginForm" id="loginForm" nf-model="model.form1" ref={form}>
            <ns-highlighter type="warning" role="alert">
                <h2 slot="heading" role="heading" aria-level="2">
                Moving out after 8th June 2020?
                </h2>
                If you are moving after this date please visit us again nearer the time. We need to know 28 days or less before your move date.
            </ns-highlighter>
            <ns-datepicker name="movedate" year="2020" month="3" label="What date are you moving out?" validation="[&quot;isRequired&quot;]"></ns-datepicker>
            <ns-cta type="direct" loading="false">Next</ns-cta>
          </ns-form>
        </div>
      </ns-panel>
    </div>
  )
}
