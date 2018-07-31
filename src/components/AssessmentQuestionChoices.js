import React, {Component} from 'react';

class AssessmentQuestionChoices extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: 'none',
		}
	}
	setActive(i) {
		this.setState({active: i})
	}
	render() {
		const {choices, topicTitle, assessmentID, questionID, userAssessmentData, onChangeAssessmentAnswer} = this.props;
		return choices.map( (answer, answerID) => answer.get('answer_choice') ? (
		<div key={answerID} className={this.state.active === answerID ? 'radio active' : 'radio'}>
			<label onClick={() => this.setActive(answerID)}>
	  		<input 
	      	onChange={() => onChangeAssessmentAnswer(
						topicTitle,
						assessmentID,
						questionID,
						answerID,
					)}
	    		type="radio" 
	    		value="option1" 
	    		checked={userAssessmentData.getIn([topicTitle, assessmentID, 'answers', questionID ]) === answerID} 
	    	/>
					{answer.get('answer_choice')}
	   	</label>
	  </div>) : null)
	}
}

export default AssessmentQuestionChoices;