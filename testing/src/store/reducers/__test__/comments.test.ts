import { commentsReducer } from '../comments';
import { CommentActionTypes, SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action: CommentActionTypes = {
    type: SAVE_COMMENT,
    payload: { value: 'comentario 2' }
  };
  const newState = commentsReducer({ comments: [] }, action);

  expect(newState).toEqual({ comments: [{ value: 'comentario 2' }] })
});
