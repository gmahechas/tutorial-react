import { combineReducers } from 'redux';
import * as fromTodos from './todo.reducer';

export const rootReducer = combineReducers({
  todos: fromTodos.reducer
});

export type RootState = ReturnType<typeof rootReducer>