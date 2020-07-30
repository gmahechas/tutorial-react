import { counterSlice } from '../reducers/counter.reducer'
import { AppThunk } from '../reducers';

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};