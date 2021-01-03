import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '.';
import * as fromEffects from '../effects/thunk';

import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { ActionTypes, EnumActionTypes } from '../actions/thumk';
import { ITodo } from '../../models/todo.model';

export interface State {
   readonly todos: ITodo[],
   readonly error: string
}

const initialState: State = {
  todos: [],
  error: ''
}

export const reducer = (state = initialState, action: ActionTypes): State => {
  switch (action.type) {
    case EnumActionTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: [...state.todos, ...action.payload] }
    case EnumActionTypes.FETCH_TODOS_FAILED:
      return { ...state, error: action.payload }
    case EnumActionTypes.DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
    default:
      return state;
  }
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

/*************** Redux Props ***************/
const mapState = ({ todos }: RootState) => ({ todos });
//const mapDispath = (dispath: Dispatch) => bindActionCreators(fromEffects, dispath);
export const connector = connect(mapState, fromEffects);
export type PropsFromRedux = ConnectedProps<typeof connector>;
/*************** Redux Props ***************/