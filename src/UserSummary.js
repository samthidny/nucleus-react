import { useSelector } from 'react-redux';

export default function UserSummary() {


  const title = useSelector(state => state.title);
  const firstname = useSelector(state => state.firstname);
  const surname = useSelector(state => state.surname);

  return (
    <div className="splash">
      <dl className="dl-row">
        <div>
          <dt>User details</dt>
          <dd>{title} {firstname} {surname}</dd>
          {/* <dd><a id="new-address-button">Change your postcode</a></dd> */}
        </div>
      </dl>
    </div>
  )
}
