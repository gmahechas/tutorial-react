const INCREMENT = 'INCREMENT';
const DEINCREMENT = 'DEINCREMENT';
const RESET = 'RESET';

export const increment = () => ({
  type: INCREMENT
})

export const deincrement = () => ({
  type: DEINCREMENT
})
export const reset = (payload: number) => ({
  type: RESET,
  payload
})

const initialState = 0;

export default function (state = initialState, action: any) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DEINCREMENT:
      return state - 1;
    case RESET:
      return action.payload;
    default:
      return state;
  }
}