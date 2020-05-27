import * as actionTypes from '../actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        counter: state.counter - action.val
      };
    default:
      return state;
  }
};

export default reducer;