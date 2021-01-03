import React, { FC, ComponentType } from 'react';

interface IProps {
  loading: boolean;
}
const withState = <P extends IProps>(
  WrappedComponent: ComponentType<P>
): FC<P & IProps> => ({ loading, ...props }: IProps) => {

  const ComposedCom = <WrappedComponent {...(props as P)} />;
  return ComposedCom;
};

export default withState;
