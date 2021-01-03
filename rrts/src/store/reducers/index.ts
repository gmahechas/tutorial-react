import { combineReducers } from 'redux';
import * as fromTodos from './todos';

export const rootReducer = combineReducers({
  todos: fromTodos.reducer
});

export type RootState = ReturnType<typeof rootReducer>