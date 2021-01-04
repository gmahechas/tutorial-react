import { all } from 'redux-saga/effects';
import todoEffects from './todo.effects'

export default function* rootSaga() {
  yield all([
    todoEffects(),
  ])
}