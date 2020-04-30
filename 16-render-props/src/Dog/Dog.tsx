import React, { Component } from 'react'

export default class Dog extends Component<any> {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/dog.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt="Dog" />
    )
  }
}
