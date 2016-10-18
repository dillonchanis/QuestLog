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
			name: e.target.questName.value,
			desc: e.target.questDesc.value,
			pic: e.target.questPic.value,
			difficulty: e.target.questDifficulty.value
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
								className="quest-form" 
								onSubmit={this.createQuest}
							>
								<input 
									type="text" 
									name="questName"
									placeholder="Quest Name" 
								/>
								
								<textarea 
									name="questDesc"
									placeholder="Quest Description" 
								/>
								
								<input 
									type="text" 
									name="questPic"
									placeholder="Quest Picture URL" 
								/>
								
								<div className="radio-group">
									<input id="DiffEasy" 
										type="radio" 
										value="easy"
										name="questDifficulty"
									/>
									<label htmlFor="DiffEasy">Easy</label>

									<input id="DiffMed" 
										type="radio" 
										value="medium"
										name="questDifficulty"
									/>
									<label htmlFor="DiffMed">Medium</label>

									<input id="DiffHard" 
										type="radio" 
										value="hard"
										name="questDifficulty"
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