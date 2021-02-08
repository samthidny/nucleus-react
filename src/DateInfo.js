import { useSelector } from 'react-redux'

export default function DateInfo() {

  const us = useSelector;

  // Returns a state hook
  const createSelector = (name, func) => {
    return us(state => state[name], (left, right) => {
      const l = func(left);
      const r = func(right);

      return l === r;
    });
  };

  const isoDate = (date) => {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  };

  const startDate = createSelector('startDate', isoDate);
  const endDate = createSelector('endDate', isoDate);
  const counter = createSelector('counter', counter => counter);

  return (
        <dl className="dl-row">
        <div>
          <dt>Start Date</dt>
          <dd>{startDate.toString()}</dd>
          <dd>
            <a href="#!">Change start date</a>
          </dd>
        </div>
        <div>
          <dt>End Date</dt>
          <dd>{endDate.toString()}</dd>
          <dd>
            <a href="#!">Change end date</a>
          </dd>
        </div>
        <div>
          <dt>Counter</dt>
          <dd>{counter}</dd>
        </div>
        </dl>
  );

}
