import { combineReducers } from 'redux';
import { reducer as fromRepositories } from './repositories.reducer';

const rootReducer = combineReducers({
  repositories: fromRepositories
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;