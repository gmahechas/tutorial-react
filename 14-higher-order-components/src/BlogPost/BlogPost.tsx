import React, { Component } from 'react'

export default class BlogPost extends Component {
  render() {
    console.log('BlogPost:::', this.props);
    return (
      <div>
        BlogPost
      </div>
    )
  }
}