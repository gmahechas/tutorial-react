import React, { FC } from 'react';
import { Link, Route } from 'react-router-dom';

import { PropsFromRedux, connector } from '../store/reducers/auth';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

interface IProps extends PropsFromRedux {}
const App: FC<IProps> = ({ isAuth, changeAuth }) => {
  const renderButton = () => {
    if (isAuth) {
      return <button onClick={() => changeAuth(false)}>SignOut</button>;
    } else {
      return <button onClick={() => changeAuth(true)}>SignIn</button>;
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path='/post' component={CommentBox} />
      <Route path='/' exact component={CommentList} />
    </div>
  );
};

export default connector(App);
