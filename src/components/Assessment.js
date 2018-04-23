import React, {Component} from 'react';
import AssessmentQuestion from '../containers/AssessmentQuestion';
import AssessmentSubmit from '../containers/AssessmentSubmit';
import AssessmentHeader from './AssessmentHeader';
import { List } from "immutable";

class Assessment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			retake: false,
		}
		this.retakeOnClick = this.retakeOnClick.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCancel = this.onCancel.bind(this);
	}

	retakeOnClick() {
		const { id, topic, deleteAssessmentData } = this.props;

		deleteAssessmentData(topic.getIn(['short_title']), id, topic.getIn(['assessments', id]));

		this.setState({retake: true});
	}

	onSubmit() {
		this.setState({retake: false})
	}

	onCancel() {
		const { id, topic, getArchivedAssessmentData } = this.props;

		getArchivedAssessmentData(topic.getIn(['short_title']), id, topic.getIn(['assessments', id]));

		this.setState({retake: false})
	}

	render() {

		const { id, topic, userAssessmentData } = this.props;

		if(userAssessmentData.getIn([topic.getIn(['short_title']), id])) {
			console.log(userAssessmentData.getIn([topic.getIn(['short_title']), id]).toJS());
		}

		return (
			<div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-4 narrow-padding">
				<AssessmentHeader 
					assessmentID={id}
					assessmentTitle={topic.getIn(['assessments', id, 'assessment_title'])}
					result={userAssessmentData.getIn([topic.getIn(['short_title']), id, 'result']) }
					answers={userAssessmentData.getIn([topic.getIn(['short_title']), id, 'answers'])}
					totalQuestions={topic.getIn(['assessments', id, 'questions']).size}
					assessment={topic.getIn(['assessments', id])}
					topicTitle={topic.getIn(['short_title'])}
					retake={this.state.retake}
					retakeOnClick={this.retakeOnClick}
				/>

				<div className="assessment-questions">
				  	{ topic.getIn(['assessments', id, 'questions']).map( (question, questionID) => (
						<AssessmentQuestion 
							key={questionID} 
							question={question} 
							questionID={questionID}
							assessmentID={id}
							topicTitle={topic.getIn(['short_title'])}
							retake={this.state.retake}
						/>
					)) }
				</div>

				{ userAssessmentData.getIn([topic.getIn(['short_title']), id, 'result']) == null || this.state.retake ?
					<AssessmentSubmit 
						assessmentID={id}
						assessment={topic.getIn(['assessments', id])}
						topicTitle={topic.getIn(['short_title'])}
						userAnswers={
							userAssessmentData.getIn([topic.getIn(['short_title']), id, 'answers']) ?
							userAssessmentData.getIn([topic.getIn(['short_title']), id, 'answers']) : List([])
						}
						onSubmit={this.onSubmit}
						retake={this.state.retake}
						onCancel={this.onCancel}
					/> : null}
			</div>
		)
	}
}

export default Assessment;