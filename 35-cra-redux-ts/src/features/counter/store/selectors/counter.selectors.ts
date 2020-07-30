import { CounterState } from '../reducers';

export const selectCount = (state: CounterState) => state.counter.value;