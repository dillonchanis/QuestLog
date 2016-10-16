import React from 'react';

const TopNavigation = () => {
	return(
    <nav className="nav-top">
      <a className="brand" href="/">!</a>
      <a className="avatar" href="/">
        <i className="material-icons">face</i>
      </a>
      <span className="username">John Doe</span>
    </nav>
	);
}

export default TopNavigation;

