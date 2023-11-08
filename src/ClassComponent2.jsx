// ClassComponent2.js
import React, { Component } from 'react';

class ClassComponent2 extends Component {
  render() {
    return (
      <div>
        <p>Ime: {this.props.ime}</p>
        <p>Godine: {this.props.godine}</p>
      </div>
    );
  }
}

export default ClassComponent2;
