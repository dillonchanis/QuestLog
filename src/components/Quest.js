import React from 'react';

class Quest extends React.Component {

	render() {
		const quest = this.props.quest;
		return(
			<div className="card">
				<div className="card-content">
					<span className="card-title">{quest.name}</span>
					<img src={quest.pic} />
					<p>{quest.desc}</p>
					<p>Difficulty: {quest.difficulty}</p>
				</div>
			</div>
		);
	}

}

export default Quest;