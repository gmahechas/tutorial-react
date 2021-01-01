import React, { FC, useEffect } from 'react';

import { connector } from '../store/reducers/auth';

const requiredAuth = (ChildComponent: any) => {
  const ComposedCom: FC<any> = (props) => {
    const { isAuth, history } = props;
    useEffect(() => {
      if (!isAuth) {
        history.push('/');
      }
    }, [isAuth, history]);
    return <ChildComponent {...props} />;
  };
  return connector(ComposedCom);
};

export default requiredAuth;
