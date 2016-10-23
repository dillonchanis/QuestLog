import React from 'react';

class Achievement extends React.Component {
	constructor() {
		super();

		this.renderAchievement = this.renderAchievement.bind(this);
		this.renderUnlocks = this.renderUnlocks.bind(this);
	}

	renderUnlocks() {
		if (this.props.unlock) {
			return(
				<div className="panel-footer">
			  	<em>Unlocks {this.props.unlock}.</em>
				</div>
			)
		}
	}

	renderAchievement() {
		console.log(this.props.completed);
		if (this.props.completed) {
			return(
				<div className="panel panel-default text-center">
				  <div className="panel-heading">
				    <h3 className="panel-title">{this.props.title}</h3>
				  </div>
				  <div className="panel-body">
				    {this.props.desc}
				  </div>
				  {this.renderUnlocks()}
				</div>
			);
		}

		else {
			return(
				<div className="panel panel-default panel-incomplete text-center">
				  <div className="panel-heading">
				    <h3 className="panel-title">{this.props.title}</h3>
				  </div>
				  <div className="panel-body">
				    {this.props.desc}
				  </div>
				  {this.renderUnlocks()}
				</div>
			);
		}
	}

	render() {
		return(
			<div className="col-md-12">
				{this.renderAchievement()}
			</div>
		);
	}
};

export default Achievement;

