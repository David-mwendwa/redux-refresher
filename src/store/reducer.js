const INITIAL_STATE = {
  counter: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

export default reducer;
