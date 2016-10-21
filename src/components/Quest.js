import React from 'react';

/**
 * Renders a Quest from AddQuestForm
 */
class Quest extends React.Component {

	render() {
		//Get quest from props
		const quest = this.props.quest;
		return(
			<div className="card">
				<div className="card-content">
					<span className="card-title">{quest.name}</span>
					<img src={quest.pic} alt={quest.name} />
					<p>{quest.desc}</p>
					<p>Difficulty: {quest.difficulty}</p>
				</div>
			</div>
		);
	}

}

export default Quest;