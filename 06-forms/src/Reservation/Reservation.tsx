import React from 'react'

type State = {
  isGoing: boolean,
  numberOfGuests: number
}

class Reservation extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    var partialState: any = {}
    partialState[name] = value;
    this.setState(partialState);
  }

  render() {
    return (
      <form>
        <label>Is going:
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>Number of guests:
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
        </label>
        <hr />
        {this.state.isGoing ? 'true' : 'false'}
        {this.state.numberOfGuests}
      </form>
    );
  }
}

export default Reservation;