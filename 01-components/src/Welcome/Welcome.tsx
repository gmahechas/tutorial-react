import React from 'react';

class Welcome extends React.Component<any> {
  render() {
    return <h1>Hello {this.props.name}.</h1>;
  }
}

export default Welcome;