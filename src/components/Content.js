import React from 'react';

import Sidebar from './Sidebar';
import AddQuestForm from './AddQuestForm';
import Quest from './Quest';

class Content extends React.Component {
	constructor() {
		super();

		this.renderMyQuests = this.renderMyQuests.bind(this);
	}

	renderMyQuests() {
		if(this.props.myQuests) {
			return(
				Object.keys(this.props.myQuests).map(key => <Quest key={key} index={key} quest={this.props.myQuests[key]} />)
			)
		} else {
			return(
				<p><em>I currently have no quests...</em></p>
			)
		}
	}

	render() {
		return(
			<div>
				<button className="btn btn-primary" onClick={this.props.getSampleQuests}>Starter Quests</button>
				<br />
	  		<AddQuestForm addQuest={this.props.addQuest} />

	  		<hr />

	  		<h2>My Quests</h2>
	  		<div className="row">
	  			{ this.renderMyQuests() }
	  		</div>

	  	</div>
		);
	}
}

export default Content;

