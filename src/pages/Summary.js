import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Summary() {
  return (
    <div>
      <BackButton />
      <ns-landmark type="hillside" gradient="invert-ramp-cyan">
        <h1 slot="heading">
        <span className="h5">Thank you. We hope your move goes well. </span>
        <span className="h1 enlighten"> <b>We’ve received your moving details</b></span>
        </h1>
        <p slot="paragraph">Keep your eyes peeled for an email containing all your moving details.</p>
        <p slot="paragraph">We’ll email over your final statements within the next couple of days.</p>
      </ns-landmark>

      <ns-panel decoration="">
        <div className="splish">
            <h2>We’ve estimated your final balances</h2>
            <p className="p-feature">We’ll collect the outstanding balance from your Direct Debit within ten to fourteen days and place the refund into your account within five days of the bill being produced.</p>
        </div>

        <div className="splish triple" role="list">
          <ns-card role="listitem" type="section" decoration="gas">
              <h3 slot="heading" role="heading" aria-level="3">Gas balance</h3>
              <p slot="paragraph">We estimate <b>you’ll owe us</b> <ns-price pence="12250"></ns-price>.</p>
          </ns-card>

          <ns-card role="listitem" type="section" decoration="bulb">
              <h3 slot="heading" role="heading" aria-level="3">Electricity balance</h3>
              <p slot="paragraph">We estimate <b>we’ll owe you</b> <ns-price pence="3276"></ns-price>.</p>
          </ns-card>
        </div>
      </ns-panel>
    </div>
  )
}
