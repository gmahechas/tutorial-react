import { Dispatch } from 'redux';
import { EnumActionTypes, ActionTypes } from '../../actions/thumk';
import { IServices } from '../../../services';

export const fetchTodos = () => async (dispatch: Dispatch, getState: () => void, { todoService }: IServices) => {
  dispatch<ActionTypes>({
    type: EnumActionTypes.FETCH_TODOS
  });
  try {
    const response = await todoService.fetchTodos();
    dispatch<ActionTypes>({
      type: EnumActionTypes.FETCH_TODOS_SUCCESS,
      payload: response.data
    })
  } catch (error) {
    dispatch<ActionTypes>({
      type: EnumActionTypes.FETCH_TODOS_FAILED,
      payload: 'Super error'
    })
  }
}

export const deleteTodo = (id: number): ActionTypes => {
  return {
    type: EnumActionTypes.DELETE_TODO,
    payload: id
  }
}