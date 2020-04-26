import React from 'react';

import FormattedDate from '../FormattedDate/FormattedDate';

class Clock extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.setState({
      timerID: setInterval(
        () => this.tick(),
        1000
      )
    });
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

export default Clock;