import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { counterSlice } from './counter.reducer';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});

export type CounterState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  CounterState,
  unknown,
  Action<string>
>;
