const DefaultReducer = function(state, action) {
  console.log('App REDUCER heard ' + action.type + ' setting date to ' + action.date);

  const copy = { startDate: state.startDate, endDate: state.endDate, counter: state.counter + 1 }


  return copy;
}

export default DefaultReducer;

