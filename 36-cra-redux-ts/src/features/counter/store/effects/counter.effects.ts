import { incrementByAmount } from "../reducers/counter.reducer";
import { AppThunk } from "../../../../app/store";

export const incrementAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};