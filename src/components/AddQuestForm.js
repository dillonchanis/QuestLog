import React from 'react';


/**
 * Quest Form.
 */
class AddQuestForm extends React.Component {
	constructor() {
		super();

		this.createQuest = this.createQuest.bind(this);
	}

	/**
	 * Creates quest based on form data.
	 * @param {object} event - event object from form submission.
	 */
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

		//Pass to App's (parent component) addQuest method
		this.props.addQuest(quest);

		//Reset the Form
		e.target.reset();
	}

	render() {
		return(
				<div className="panel panel-default">
				  <div className="panel-heading">Quest Creation</div>
				  <div className="panel-body">
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

								<label htmlFor="difficulty">Difficulty:</label>
								<select id="difficulty" className="form-control" name="questDifficulty">
								  <option value="easy">Easy</option>
								  <option value="medium">Medium</option>
								  <option value="hard">Hard</option>
								</select>

								<button className="btn-primary" type="submit">Submit</button>
							</form>
				  </div>
				</div>
		);
	}
}

export default AddQuestForm;