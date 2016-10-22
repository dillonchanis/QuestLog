import React from 'react';

/**
 * Renders a Quest from AddQuestForm
 */
class Quest extends React.Component {

	render() {
		//Get quest from props
		const quest = this.props.quest;
		return(
				<div className="col-md-6">
					<div className="panel panel-default">
					  <div className="panel-heading">{quest.name}</div>
					  <div className="panel-body">
								<img className="quest-pic" src={quest.pic} alt={quest.name} />
								<p>{quest.desc}</p>
								<p>Difficulty: {quest.difficulty}</p>
						</div>
					</div>
				</div>
		);
	}

}

export default Quest;