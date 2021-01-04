import { Dispatch } from 'redux';
import * as fromActions from '../actions/index';
import { IServices } from '../../services';

export const fetchTodos = () => async (dispatch: Dispatch, getState: () => void, { todoService }: IServices) => {
  dispatch(fromActions.fetchTodos());
  try {
    const response = await todoService.fetchTodos();
    dispatch(fromActions.fetchTodosSuccess(response.data))
  } catch (error) {
    dispatch(fromActions.fetchTodosFailed('Super Error'))
  }
}

export const deleteTodo = (id: number) => {
  return fromActions.deleteTodoSuccess(id)
}