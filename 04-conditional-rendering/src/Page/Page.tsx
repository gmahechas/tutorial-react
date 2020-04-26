import React from 'react'

function WarningBanner(props: any) {
  if (!props.warn) {
    return null;
  } else {
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }
}

type State = {
  showWarning: boolean
}

class Page extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default Page
