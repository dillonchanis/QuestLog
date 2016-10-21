import React from 'react';

import Quest from './Quest';


class AllQuests extends React.Component {
	render() {
		return(
			<div>
				<h2>AllQuests</h2>
				{
		    	Object.keys(this.props.allQuests).map(key => <Quest key={key} quest={this.props.allQuests[key]} />)
		    }
			</div>
		);
	}		
}

export default AllQuests;