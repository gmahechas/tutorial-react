import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import * as fromActionsCreators from '../store/repositories/actions/repositories.actions.creators'

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(fromActionsCreators, dispatch);
}