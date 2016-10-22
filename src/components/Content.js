import React from 'react';

import Sidebar from './Sidebar';
import AddQuestForm from './AddQuestForm';

class Content extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<button className="btn btn-primary" onClick={this.props.getSampleQuests}>Starter Quests</button>
				<br />
	  		<AddQuestForm addQuest={this.props.addQuest} />
	  	</div>
		);
	}
}

export default Content;

