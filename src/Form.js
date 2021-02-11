import { useSelector, useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';

export default function Form() {

  const us = useSelector;

  // Returns a state selector
  const createSelector = (name) => {
    return us(state => state[name], (left, right) => {
      return left === right;
    });
  };

  const title = createSelector('title');
  const firstname = createSelector('firstname');
  const surname = createSelector('surname');

  const titleInputter = useRef();
  const firstnameInputter = useRef();
  const surnameInputter = useRef();

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    console.log('Input Changed ' + event.currentTarget.getAttribute('name') + ' ' + event.currentTarget.value);
    dispatch({
      type: 'UPDATE_USER',
      name: event.currentTarget.getAttribute('name'),
      value: event.currentTarget.value
    });
  }

  const createEffectCallback = (ref, handler) => {
    return () => {
      ref.current.addEventListener('change', handler);
      return () => {
        // Called when component unmounts
        ref.current.removeEventListener('change', handler);
      }
    };
  }

  useEffect(createEffectCallback(titleInputter, changeHandler));
  useEffect(createEffectCallback(firstnameInputter, changeHandler));
  useEffect(createEffectCallback(surnameInputter, changeHandler));
  
  const submittedForm = (event) => {
    console.log('Submit Form');
  }


  const formSubmitHandler = (event) => {
    console.log('ref form submit');
    const validation = event.currentTarget.validate();
  };

  // Submit form listener
  const formRef = useRef();
  useEffect(() => {
    formRef.current.addEventListener('submit', formSubmitHandler);
    return () => {
      formRef.current.removeEventListener('submit', formSubmitHandler);
    }
  });



  return (
    <ns-form onsubmit={submittedForm} ref={formRef}>
      <ns-fieldset legend="Your details">
        <ns-inputter validation="[&quot;isRequired&quot;]" name="title" value={title} ref={titleInputter}>
          <label slot="label" htmlFor="nsid-ekcc69l9u3f-input">Title</label>
          <select autoComplete="honorific-prefix" name="select" id="nsid-ekcc69l9u3f-input">
            <option value="">Please Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            <option value="Sir">Sir</option>
            <option value="Reverend">Reverend</option>
            <option value="Dame">Dame</option>
            <option value="Lady">Lady</option>
            <option value="Professor">Professor</option>
            <option value="Lord">Lord</option>
          </select>
        </ns-inputter>

        <ns-inputter validation="[&quot;isRequired&quot;,&quot;isFirstName&quot;]" name="firstname" value={firstname} ref={firstnameInputter}>
          <label slot="label" htmlFor="nsid-k4cppg5n3tb-input">First name</label>
          <input autoComplete="given-name" type="text" id="nsid-k4cppg5n3tb-input" />
        </ns-inputter>

        <ns-inputter validation="[&quot;isRequired&quot;,&quot;isLastName&quot;]" name="surname" value={surname} ref={surnameInputter}>
          <label slot="label" htmlFor="nsid-ansmbxsd6kg-input">Surname</label>
          <input autoComplete="family-name" type="text" id="nsid-ansmbxsd6kg-input" />
        </ns-inputter>
      </ns-fieldset>

      <ns-cta type="direct">Submit</ns-cta>
      <ns-cta type="text">Submit 2</ns-cta>
    </ns-form>
  )
}
