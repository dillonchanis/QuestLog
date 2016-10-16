import React from 'react';

import Sidebar from './Sidebar';
import AddQuestForm from './AddQuestForm';
import Quest from './Quest';

class Content extends React.Component {
	constructor() {
		super();

		this.showForm = this.showForm.bind(this);
	}

	showForm() {
		console.log('Show Form');
	}

	render() {
		return(
			<div>
				<Sidebar showMenu={this.props.showMenu} />

	    	<div className="content-wrapper">
	    		<button className="btn-flat" onClick={this.showForm}>Create A Quest</button>
	    		<AddQuestForm addQuest={this.props.addQuest} />
	    		{/* Show Quests */}
	    		{
	    			Object.keys(this.props.allQuests).map(key => <Quest key={key} quest={this.props.allQuests[key]} />)
	    		}
	    	</div>
	    </div>
		);
	}
}

export default Content;

