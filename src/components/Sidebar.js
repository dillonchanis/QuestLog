import React from 'react';

class Sidebar extends React.Component {
	render() {
		return (
			<div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active"><a href="/">Dashboard <span className="sr-only">(current)</span></a></li>
          <li><a href="/quests">Quests</a></li>
          <li><a href="/achievements">Achievements</a></li>
        </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item</a></li>
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
          <li><a href="">More navigation</a></li>
        </ul>
      </div>
		);
	}
}

export default Sidebar;