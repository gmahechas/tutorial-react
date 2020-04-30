import React, { Component } from 'react'

import Mouse from './Mouse';
import Dog from './../Dog/Dog';

export default class MouseTracker extends Component<any, any> {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={(mouse: any) => (<Dog mouse={mouse} />)} />
      </div>
    )
  }
}
