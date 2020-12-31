import { Comment } from '../../models/comment';

export const SAVE_COMMENT = 'SAVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

type ISaveCommentAction = {
  type: typeof SAVE_COMMENT
  payload: Comment
}

type IFetchCommentsAction = {
  type: typeof FETCH_COMMENTS,
  payload: any
}

export type CommentActionTypes =
  ISaveCommentAction |
  IFetchCommentsAction;