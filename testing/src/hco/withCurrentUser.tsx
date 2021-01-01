import React from 'react';

const withCurrentUser = (Component: any) => {
  const newComponent = (props: any) => {
    console.log(props);
    return <Component {...props} />;
  };

  return newComponent;
};
export default withCurrentUser;
