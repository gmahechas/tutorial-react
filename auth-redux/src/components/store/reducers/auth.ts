import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '.';
import * as fromActions from '../actions'
import { AUTH_USER, AUTH_ERROR, AuthActionTypes } from '../actions/types';

interface AuthState {
  authenticated: string;
  errorMessage: string;
}

const initialState: AuthState = {
  authenticated: '',
  errorMessage: ''
};

export const authReducer = (state = initialState, action: AuthActionTypes) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload.token }
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload.error }
    default:
      return state;
  }
}

/*************** Redux Props ***************/
export const mapState = ({ auth }: RootState) => ({ auth });
export const connector = connect(mapState, fromActions);
export type PropsFromRedux = ConnectedProps<typeof connector>;
/*************** Redux Props ***************/