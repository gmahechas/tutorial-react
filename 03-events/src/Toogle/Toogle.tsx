import React from 'react';

interface ToggleState {
  isToggleOn: boolean;
}

class Toggle extends React.Component<any, ToggleState> {
  constructor(props: any) {
    super(props);
    this.state = { isToggleOn: true };

    // This link is required to make `this` work in the callback. RECOMMENDED !!!!!!!!!!
    this.handleClick = this.handleClick.bind(this);
  }

  // 1. To avoid the `this` binding you can use this `handleClick = () => { }` EXPERIMENTAL AND NOT YET STANDARDIZED.
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  // 2. To avoid the `this` binding you can use this `() => this.handleClick()` THIS AFFECTS PERFORMANCE
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle;