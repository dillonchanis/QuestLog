import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Top Navbar */}
        <div className="nav-wrapper">
          <nav className="navbar nav-top">
            <a className="brand" href="/">!</a>
            <a className="avatar" href="/">
              <i className="material-icons">face</i>
            </a>
            <span className="username">John Doe</span>
          </nav>

          {/* Sidebar / Side Navbar */}
          <nav className="navbar nav-side">
            <ul>
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
        </div>
      </div>
    );
  }
}

export default App;
