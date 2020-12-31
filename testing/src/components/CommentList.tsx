import React, { FC } from 'react';
import { PropsFromRedux, connector } from '../store/reducers/comments';

interface IProps extends PropsFromRedux {}
const CommentList: FC<IProps> = ({ comments }) => {
  const renderComments = () => {
    return comments.map((comment) => {
      return <li key={comment.value}>{comment.value}</li>;
    });
  };
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};

export default connector(CommentList);
