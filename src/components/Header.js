import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Blog Application</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new-post">Create New Post</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
