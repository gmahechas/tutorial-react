import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '.';
import * as fromActions from '../actions';
import { CommentActionTypes, CHANGE_AUTH } from '../actions/types';

interface AuthState {
  isAuth: boolean
}

const initialState: AuthState = {
  isAuth: false
};

export const authReducer = (state = initialState, action: CommentActionTypes) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        isAuth: action.payload
      }
    default:
      return state;
  }
}

/*************** Redux Props ***************/
const mapState = ({ auth }: RootState) => ({ isAuth: auth.isAuth });
export const connector = connect(mapState, fromActions);
export type PropsFromRedux = ConnectedProps<typeof connector>;
/*************** Redux Props ***************/