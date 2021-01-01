import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  myComments: commentsReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>