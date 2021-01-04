import { ITodo } from '../../models/todo.model';
import { TodoTypes, TodoActionTypes } from '../actions';

export interface State {
  readonly todos: ITodo[];
  readonly loading: boolean;
  readonly error: string;
}

const initialState: State = {
  todos: [],
  loading: false,
  error: ''
}

export const reducer = (state = initialState, action: TodoActionTypes): State => {
  switch (action.type) {
    case TodoTypes.FETCH_TODOS:
      return { ...state, loading: true }
    case TodoTypes.FETCH_TODOS_SUCCESS:
      return { ...state, todos: [...state.todos, ...action.payload], loading: false }
    case TodoTypes.FETCH_TODOS_FAILED:
      return { ...state, error: action.payload, loading: false }
    default:
      return state;
  }
}