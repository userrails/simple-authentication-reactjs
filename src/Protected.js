import React, { Component } from 'react';

class Protected extends Component {
  render () {
    return (
      <div>This is protected page which is private, only loggedin use can access this page.</div>
      )
  }
}

export default Protected;