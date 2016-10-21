import React from 'react';

import Sidebar from './Sidebar';
import AddQuestForm from './AddQuestForm';

class Content extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
	  	<AddQuestForm addQuest={this.props.addQuest} />
		);
	}
}

export default Content;

