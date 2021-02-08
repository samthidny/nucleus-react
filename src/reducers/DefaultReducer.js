const DefaultReducer = function(state, action) {
  console.log('App REDUCER heard ' + action.type + ' setting date to ' + action.date);

  const copy = { startDate: state.startDate, endDate: state.endDate, counter: state.counter }

  switch (action.type) {

    case 'START_DATE_CHANGE' : {
      copy.startDate = action.date;
      break;
    }

    case 'END_DATE_CHANGE' : {
      copy.endDate = action.date;
      break;
    }

    case 'INC_COUNT' : {
      copy.counter += 1;
    }

  }

  console.log('New State ' + copy);
  return copy;
}

export default DefaultReducer;

