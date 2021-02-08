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
    <div>
      <h3>Counter {counter}</h3>
      <p>Start: {startDate.toString()} End: {endDate.toString()}</p>
    </div>
  );
}
