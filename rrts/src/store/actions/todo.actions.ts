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

export const deleteTodoSuccess = (id: number) => {
  return {
    type: TodoTypes.DELETE_TODO,
    payload: id
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

type IDeleteTodoAction = {
  type: typeof TodoTypes.DELETE_TODO
  payload: number
}

export type TodoActionTypes =
  IFetchTodosAction |
  IFetchTodosSucessAction |
  IFetchTodosFailedAction |
  IDeleteTodoAction