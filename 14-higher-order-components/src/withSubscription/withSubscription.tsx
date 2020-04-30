import React from 'react'

export default function withSubscription(Component: any) {
  return class extends React.Component<any> {

    componentDidMount() {
      // ... que se encarga de la suscripción...
      // DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      // DataSource.removeChangeListener(this.handleChange);
    }

    render() {
      return <Component data={this.props} />;
    }
  };
}
