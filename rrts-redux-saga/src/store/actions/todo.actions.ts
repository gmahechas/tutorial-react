import { ITodo } from '../../models/todo.model';

export enum TodoTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILED = 'FETCH_TODOS_FAILED',
  DELETE_TODO = 'DELETE_TODO',
};

export const fetchTodos = () => {
  return {
    type: TodoTypes.FETCH_TODOS
  }
}

export const fetchTodosSuccess = (todos: ITodo[]) => {
  return {
    type: TodoTypes.FETCH_TODOS_SUCCESS,
    payload: todos
  }
}

export const fetchTodosFailed = (error: string) => {
  return {
    type: TodoTypes.FETCH_TODOS_FAILED,
    payload: error
  }
}

type IFetchTodosAction = {
  type: typeof TodoTypes.FETCH_TODOS
}

type IFetchTodosSucessAction = {
  type: typeof TodoTypes.FETCH_TODOS_SUCCESS
  payload: ITodo[]
}

type IFetchTodosFailedAction = {
  type: typeof TodoTypes.FETCH_TODOS_FAILED
  payload: string
}

export type TodoActionTypes =
  IFetchTodosAction |
  IFetchTodosSucessAction |
  IFetchTodosFailedAction