import React from 'react';

import Achievement from './Achievement';

class AchievementList extends React.Component {
	render() {
		return(
			<div>
				<h2>All Achievements</h2>

				<hr />
				
				<div className="row">
					<Achievement 
						title="Addict" 
						desc="Complete 'Wake Up!' 100 Times." 
						completed={this.props.completed['Wake Up!'] >= 100} 
					/>
					<Achievement 
						title="Coffee Lover" 
						desc="Complete 'Wake Up!' 3 Times." 
						completed={this.props.completed['Wake Up!'] >= 3} 
					/>
					<Achievement 
						title="Killin' It" 
						desc="Complete 'Don't Look Down'." 
						completed={this.props.completed['Dont Look Down'] >= 1} 
					/>
					<Achievement 
						title="A God Amongst Mere Mortals" 
						desc="Complete the quests 'Annapurna', 'K2', and 'Denali'." 
						completed={this.props.completed['Annapurna'] >= 1  && this.props.completed['K2'] >=1 && this.props.completed['Denali'] >= 1} 
						unlock="the title 'Titan'" />
				</div>
			</div>
		);
	}
};

export default AchievementList;

