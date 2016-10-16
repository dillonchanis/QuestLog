import React from 'react';

class Sidebar extends React.Component {
	render() {
		return (
			<nav className="nav-side">
	      <ul className="mobile-menu">
	        <li onClick={this.props.showMenu}>
	          <a role="button">
	            Menu
	          </a>
	        </li>
	      </ul>
	      <ul className="main-menu">
	        <li className="active">
	          <a href="/">
	            <span>
	              <i className="material-icons">home</i>
	            </span>
	            Dashboard
	          </a>
	        </li>
	        <li>
	          <a href="/">
	            <span>
	              <i className="material-icons">announcement</i>
	            </span>
	            Quests
	          </a>
	        </li>
	        <li>
	          <a href="/">
	            <span>
	              <i className="material-icons">format_list_numbered</i>
	            </span>
	            Leaderboards
	          </a>
	        </li>
	        <li>
	          <a href="/">
	            <span>
	              <i className="material-icons">account_box</i>
	            </span>
	            Profile
	          </a>
	        </li>
	      </ul>
	    </nav>
		);
	}
}

export default Sidebar;