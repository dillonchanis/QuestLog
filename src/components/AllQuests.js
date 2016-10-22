import React from 'react';

import Quest from './Quest';


class AllQuests extends React.Component {
	render() {
		return(
			<div>
				<h2>All Quests</h2>
				<div className="row">
					{Object.keys(this.props.allQuests).map(key => <Quest key={key} quest={this.props.allQuests[key]} />)}
		    </div>
			</div>
		);
	}		
}

export default AllQuests;