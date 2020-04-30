import React from 'react'

import { ctxt } from './Context';

export default class ThemedButton extends React.Component<any> {

  static contextType = ctxt;
  render() {
    return (
      <div>
        <span>{this.context.theme}</span>
      </div>
    )
  }
}

