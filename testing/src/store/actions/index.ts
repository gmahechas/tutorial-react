import axios from 'axios';
import { Comment } from '../../models/comment';
import { CommentActionTypes, SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

export const saveComment = (comment: Comment): CommentActionTypes => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export const fetchComments = (): CommentActionTypes => {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}

export const changeAuth = (isLoggedIn: boolean): CommentActionTypes => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}