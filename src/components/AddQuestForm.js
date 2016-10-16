import React from 'react';

class AddQuestForm extends React.Component {
	constructor() {
		super();

		this.createQuest = this.createQuest.bind(this);
	}

	createQuest(e) {
		//Stop Event
		e.preventDefault();

		//Get Quest Values from form
		const quest = {
			name: this.questName.value,
			desc: this.questDesc.value,
			pic: this.questPic.value,
			difficulty: this.questDifficulty.value
		};

		console.log(quest);

		//Pass to App's addQuest method
		this.props.addQuest(quest);

		//Reset the Form
		this.questForm.reset();
	}

	render() {
		return(
				<div className="card">
					<div className="card-content">
						<div className="card-body">
							<form 
								ref={(input) => this.questForm = input}
								className="quest-form" 
								onSubmit={this.createQuest}
							>
								<input 
									ref={(input) => this.questName = input}
									type="text" 
									placeholder="Quest Name" 
								/>
								
								<textarea 
									ref={(input) => this.questDesc = input}
									placeholder="Quest Description" 
								/>
								
								<input 
									ref={(input) => this.questPic = input}
									type="text" 
									placeholder="Quest Picture URL" 
								/>
								
								<div className="radio-group">
									<input id="DiffEasy" 
										type="radio" 
										value="easy"
										ref={(input) => this.questDifficulty = input} 
									/>
									<label htmlFor="DiffEasy">Easy</label>

									<input id="DiffMed" 
										type="radio" 
										value="medium"
										ref={(input) => this.questDifficulty = input} 
									/>
									<label htmlFor="DiffMed">Medium</label>

									<input id="DiffHard" 
										type="radio" 
										value="hard"
										ref={(input) => this.questDifficulty = input} 
									/>
									<label htmlFor="DiffHard">Hard</label>
								</div>

								<button className="btn-primary" type="submit">Submit</button>
							</form>
						</div>
					</div>
				</div>
		);
	}
}

export default AddQuestForm;