import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '.';
import * as fromEffects from '../effects/todo.effects';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { TodoActionTypes, TodoTypes } from '../actions/todo.actions';
import { ITodo } from '../../models/todo.model';

export interface State {
   readonly todos: ITodo[],
   readonly error: string
}

const initialState: State = {
  todos: [],
  error: ''
}

export const reducer = (state = initialState, action: TodoActionTypes): State => {
  switch (action.type) {
    case TodoTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: [...state.todos, ...action.payload] }
    case TodoTypes.FETCH_TODOS_FAILED:
      return { ...state, error: action.payload }
    case TodoTypes.DELETE_TODO:
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