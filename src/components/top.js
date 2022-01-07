import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Top extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <h1>smiths.solutions</h1>
        </Link>
      </div>
    )
  }
}

export default Top
