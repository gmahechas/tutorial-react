import React, { createContext, useReducer } from 'react'

import { IState, initialState, reducer } from './reducers';

export const Store = createContext<IState | any>(initialState);

export function SerieStore(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
}
