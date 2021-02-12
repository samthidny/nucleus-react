const DefaultReducer = function(state, action) {
  console.log('App REDUCER heard ' + action.type + ' setting date to ' + action.date);

  // const copy = { startDate: state.startDate, endDate: state.endDate, counter: state.counter }
  const copy = { ...state }

  switch (action.type) {

    case 'METER_READ' : {
      copy.gasMeterReading = action.gasMeterReading;
      copy.electricityMeterReading = action.electricityMeterReading;
      break;
    }


    case 'UPDATE_MOVE_DATE' : {
      copy.moveDate = action.value;
      break;
    }

    case 'UPDATE_POSTCODE' : {
      copy.postcode = action.value;
      break;
    }

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

    case 'UPDATE_USER' : {
      console.log('UPDATE USER ' + action.name + ' to ' + action.value);
      copy[action.name] = action.value;
    }
    
    case 'UPDATE_ADDRESS' : {
      console.log('UPDATE ADDRESS REDUCER ' + action.name + ' to ' + action.value);
      copy.address = action.value;
    }

  }

  console.log('ACTION: ' + action.type + ' - New State ', copy);
  return copy;
}

export default DefaultReducer;

