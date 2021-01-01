import { Comment } from '../../models/comment';

export const SAVE_COMMENT = 'SAVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CHANGE_AUTH = 'CHANGE_AUTH';

type ISaveCommentAction = {
  type: typeof SAVE_COMMENT
  payload: Comment
}

type IFetchCommentsAction = {
  type: typeof FETCH_COMMENTS,
  payload: any
}

type IChangeAuthAction = {
  type: typeof CHANGE_AUTH,
  payload: boolean
}

export type CommentActionTypes =
  ISaveCommentAction |
  IFetchCommentsAction |
  IChangeAuthAction;