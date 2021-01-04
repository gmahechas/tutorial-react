import { call, put, takeLatest } from 'redux-saga/effects';
import todoService from '../../services/todo.service';
import { TodoTypes, fetchTodosSuccess, fetchTodosFailed } from '../actions/todo.actions';

function* fetchTodosEffect() {
  try {
    const todos = yield call(todoService.fetchTodos);
    yield put(fetchTodosSuccess(todos))
  } catch (error) {
    yield put(fetchTodosFailed('Error'))
  }
}

function* todoEffects() {
  yield takeLatest(TodoTypes.FETCH_TODOS, fetchTodosEffect)
}

export default todoEffects;