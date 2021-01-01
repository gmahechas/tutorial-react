import React, { FC, useState } from 'react';

import { PropsFromRedux, connector } from '../store/reducers/comments';
import requiredAuth from './requiredAu';

interface IProps extends PropsFromRedux {}
const CommentBox: FC<IProps> = ({ comments, saveComment, fetchComments }) => {
  const [comment, setComment] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveComment({ value: comment });
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className='fetch-comments' onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

export default connector(requiredAuth(CommentBox));
