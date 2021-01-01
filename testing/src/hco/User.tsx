import React, { FC } from 'react';

interface IProps {
  user: any;
}
const User: FC<IProps> = ({ user }) => {
  return (
    <div>
      <strong>
        {user.name} ({user.username})
      </strong>
      <br />
      <span>{user.email}</span>
    </div>
  );
};

export default User;
