import { combineReducers } from 'redux';
import { reducer as todoReducer } from './todo.reducer';

export const rootReducer = combineReducers({
  todos: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>