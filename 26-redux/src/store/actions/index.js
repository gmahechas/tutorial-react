const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';


export const increment = () => {
  return {
    type: INCREMENT,
  };
}

export const decrement = () => {
  return {
    type: DECREMENT
  };
}

export const add = (val) => {
  return {
    type: ADD,
    val
  };
}

export const sustract = (val) => {
  return {
    type: SUBTRACT,
    val
  };
}