import { Comment } from '../../models/comment';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '.';
import * as fromActions from '../actions';
import { CommentActionTypes, SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';

interface CommentState {
  comments: Comment[]
}

const initialState: CommentState = {
  comments: []
};

export const commentsReducer = (state = initialState, action: CommentActionTypes) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return {
        comments: [...state.comments, action.payload]
      }
    case FETCH_COMMENTS:
      const newComments = action.payload.data.map((comment: any) => {
        return { value: comment.name } as Comment
      })

      return {
        comments: [...state.comments, ...newComments]
      }
    default:
      return state;
  }
}

/*************** Redux Props ***************/
const mapState = ({ myComments }: RootState) => ({ comments: myComments.comments });
export const connector = connect(mapState, fromActions);
export type PropsFromRedux = ConnectedProps<typeof connector>;
/*************** Redux Props ***************/