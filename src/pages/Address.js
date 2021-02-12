import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import BackButton from '../components/BackButton';

export default function Address() {

  const form = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    form.current.addEventListener('submit', (event) => {
      const validation = event.currentTarget.validate();
      console.log('Submit form ', validation);
      if (validation.isValid) {
        dispatch({type: 'UPDATE_ADDRESS', value: validation.fieldsByName['address'].value.label})
        history.push("/summary");
      }
    });
  });


  const addressSelector = useRef();
  const address = useSelector(state => state.address);
  const postcode = useSelector(state => state.postcode);
  
  const addresses = [{
    "label": "129 Queenstown Rd, Battersea, London SW8 3RH"
  }, {
    "label": "131 Queenstown Rd, Battersea, London SW8 3RH"
  }, {
    "label": "133 Queenstown Rd, Battersea, London SW8 3RH"
  }];

  const postCodeSelectedHandler = (event) => {
    console.log('Postcode Selected');
    dispatch({type: 'UPDATE_POSTCODE', value: event.detail.postcode})
    addressSelector.current.addresses = addresses;
  }


  // const dispatch = useDispatch();

  const addressSelectedHandler = (event) => {
    // console.log('Address Selected ' + event.detail.address);
    
    // debugger;
    // dispatch({
    //   type: 'UPDATE_ADDRESS',
    //   value: event.detail.address
    // });
  }

  useEffect(() => {
    addressSelector.current.addEventListener('postcode-selected', postCodeSelectedHandler);
    // addressSelector.current.addEventListener('address-selected', addressSelectedHandler);
    return () => {
      if (addressSelector.current) {
        addressSelector.current.removeEventListener('postcode-selected', postCodeSelectedHandler);
        // addressSelector.current.removeEventListener('address-selected', addressSelectedHandler);
      }
    }
  })

  return (
    <ns-panel>
      <div className="splash">
        <BackButton />

        <h1 className="h2">Your new address: {address} {postcode}</h1>

        <p>This is the address that you’d like to set up your products.</p>

        <ns-form className="loginForm" id="loginForm" nf-model="model.form3" ref={form}>

          <nsx-address-selector ref={addressSelector} name="address" required="true" address={address} postcode={postcode}></nsx-address-selector>

          {/* <Link to="/summary"></Link> */}
          <ns-cta type="direct" loading="false">Confirm address</ns-cta>
        </ns-form>
      </div>
    </ns-panel>
  )
}
