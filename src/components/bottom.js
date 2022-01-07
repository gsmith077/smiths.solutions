import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="footer">
        <Link to="/" className="nav_link">
          <h3>Go back home</h3>
        </Link>
      </div>
    )
  }
}

export default Nav
