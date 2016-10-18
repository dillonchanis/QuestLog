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
			<div className="container-fluid">
				<div className="row">
					<Sidebar showMenu={this.props.showMenu} />

					<div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		    		<button className="btn-flat" onClick={this.showForm}>Create A Quest</button>
		    		<AddQuestForm addQuest={this.props.addQuest} />
		    		{/* Show Quests */}
		    		{
		    			Object.keys(this.props.allQuests).map(key => <Quest key={key} quest={this.props.allQuests[key]} />)
		    		}
		    	</div>
		    </div>
	    </div>
		);
	}
}

export default Content;

