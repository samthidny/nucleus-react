import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

export default function MeterRead() {
  
  const gasMeterReading = useSelector(state => state.gasMeterReading);
  const electricityMeterReading = useSelector(state => state.electricityMeterReading);
  const form = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    form.current.addEventListener('submit', (event) => {
      const validation = event.currentTarget.validate();
      console.log('Submit form ' + validation);
      if (validation.isValid) {
        dispatch({type: 'METER_READ', electricityMeterReading: validation.fieldsByName['electricity-meter'].value, gasMeterReading: validation.fieldsByName['gas-meter'].value})
        history.push("/address");
      }
    });
  });

  return (
    <ns-panel>
      <div className="splash">
        <div>
          <ns-cta id="back-button" type="text" href="javascript:history.back()" icon="arrow-left" loading="false">Go back</ns-cta>
        </div>
        <h1 className="h2">Your final meter readings</h1>
        <p>Please give us your last meter reading in your old home. We’ll estimate any meter readings that you don’t fill in.</p>
        <ns-form className="loginForm" id="loginForm" nf-model="model.form2" ref={form}>
          <ns-highlighter type="info" role="alert">
            <h2 slot="heading" role="heading" aria-level="2">
              Your previous meter readings
            </h2>
        Here are your previous meter readings if you need to refer to them.
    Gas: 00874, given on 2nd February 2020.

    Electricity: 00765, estimated on 6th February 2020.
    </ns-highlighter>

      <ns-inputter validation="[&quot;isRequired&quot;]" name="gas-meter" mask="00---" separator="" helper="How do I give my gas meter reading?" nf-model-path="model.form2.fields.gas-meter" value={gasMeterReading}>
        <div slot="tip-details">Enter your gas meter reading into the box below, including any zeros at the beginning. Dont worry about the red numbers or anything after the decimal point.</div>
        <label slot="label" htmlFor="surname">Gas meter reading</label>
        <input id="surname" autoComplete="family-name" type="text" aria-invalid="false" maxLength="5" />
      </ns-inputter>


      <ns-inputter validation="[&quot;isRequired&quot;]" name="electricity-meter" mask="00---" separator="" helper="How do I give my electricity meter reading?" nf-model-path="model.form2.fields.electricity-meter" value={electricityMeterReading}>
        <div slot="tip-details">Enter your electricity meter reading into the box below, including any zeros at the beginning. Don’t worry about the red numbers or anything after the decimal point.</div>
        <label slot="label" htmlFor="surname">Electricity meter reading</label>
        <input id="surname" autoComplete="family-name" type="text" aria-invalid="false" maxLength="5" />
      </ns-inputter>
          
      {/* <Link to="/address"><ns-cta type="direct" loading="false">Next</ns-cta></Link> */}

      <ns-cta type="direct" loading="false">Next</ns-cta>

    </ns-form>
  </div>
</ns-panel>
  )
}
