import React from 'react';

export default function Users() {
  return <h2>Users</h2>;
}


/* import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  name: string
}

export default class Users extends React.Component<Props, any> {

  constructor(props: Props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.history.push('/about')
  }

  render() {
    return (
      <>
        <h2>Users</h2>
        <button onClick={this.onClickHandler}>Link from {this.props.name}</button>
      </>
    );
  }
} */

