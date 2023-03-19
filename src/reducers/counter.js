const counterReducer = (state = 0, action) => {
  console.log('counterReducer');
  switch(action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
}

export default counterReducer;