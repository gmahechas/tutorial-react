import { ITodo } from '../../../models/todo.model';

export enum EnumActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED',
  DELETE_TODO = 'DELETE_TODO',
};

type IFetchTodosAction = {
  type: typeof EnumActionTypes.FETCH_TODOS
}

type IFetchTodosSucessAction = {
  type: typeof EnumActionTypes.FETCH_TODOS_SUCCESS
  payload: ITodo[]
}

type IFetchTodosFailedAction = {
  type: typeof EnumActionTypes.FETCH_TODOS_FAILED
  payload: string
}

type IDeleteTodoAction = {
  type: typeof EnumActionTypes.DELETE_TODO
  payload: number
}

export type ActionTypes =
  IFetchTodosAction |
  IFetchTodosSucessAction |
  IFetchTodosFailedAction |
  IDeleteTodoAction;