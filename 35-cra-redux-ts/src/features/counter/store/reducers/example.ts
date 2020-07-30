import { createAction, createReducer, configureStore } from "@reduxjs/toolkit"

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})

const store = configureStore({
  reducer: counter
})

store.dispatch(increment());

console.log(store.getState());