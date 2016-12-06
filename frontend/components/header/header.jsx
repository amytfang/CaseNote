import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  let userLinks;

  if (props.currentUser) {
    userLinks = (
      <ul className="header-user-links">
        <li>{ props.currentUser.username }</li>
        <li onClick={ props.logout }><a>Sign Out</a></li>
      </ul>
    );
  } else {
    userLinks = (
      <ul className="header-user-links">
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    );
  }

  return (
    <header className="header">
      <header className="top-header">
        <h1 className="header-logo">CaseNote</h1>
        { userLinks }
      </header>
      <ul className="header-nav">
        <li><Link to="/">Home</Link></li>
        <li><a href="#">All Opinions</a></li>
        <li><a href="#">Add Opinion</a></li>
      </ul>
    </header>
  );
};

export default Header;
