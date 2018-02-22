import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Completed from './Completed';
import TopicListItem from './TopicListItem';
import AssessmentListItem from './AssessmentListItem';

class TopicList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTopic: null,
			selectedAssessment: null,
		}
		this.changeAssessment = this.changeAssessment.bind(this);
		this.changeTopic = this.changeTopic.bind(this);
	}

	changeAssessment(title) {

		console.log(title);

		const selectedAssessment = this.state.selectedTopic.get('assessments').find(assessment => assessment.get('assessment_title') === title);

		console.log(selectedAssessment.toJS());

		this.setState({selectedAssessment});
	}

	changeTopic(id) {


		const selectedTopic = this.props.topics.find(topic => topic.get('id') === id);

		this.setState({selectedTopic});
	}

	render() {
		const {selectedTopic, selectedAssessment} = this.state;

		return (
			<div>
				<div className="panel">
					<div className="row">
						<div className="col-xs-10">
							<h2 className="panel-title">Topics</h2> 
						</div>
						<div className="col-xs-2">
							<h2 className="panel-title status-title">Done</h2> 
						</div>
					</div>
					<div className="taskList">
						{ this.props.topics.size > 0 ?
					  		this.props.topics.map( (topic, i) => <TopicListItem key={i} i={i} title={topic.get('short_title')} onClick={() => this.changeTopic(topic.get('id'))}/>) :
					  		<div className="row task">
					  			<div className="col-xs-10">
										<p className="taskList-task-title">There are currently no topics for this student</p>
									</div>
								</div>
					  	}
					</div>
				</div>
				{selectedTopic ? 
				<div className="panel">
					<div className="row">
						<div className="col-xs-12">
							<h2 className="panel-title">{selectedTopic.get('short_title')}</h2> 
						</div>
						<div className="col-xs-12">
		  				<p className="topic-description">Assessments for this topic:</p>
		  			</div>
					</div>
					{ selectedTopic.get('assessments').size > 0 ?
				  		selectedTopic.get('assessments').map( (assessment, i) => <AssessmentListItem 
				  			key={i} i={i} 
				  			assessment={assessment} 
				  			onClick={this.changeAssessment} 
				  			questions={selectedAssessment ? selectedAssessment.get('questions') : null}
				  			topicTitle={selectedTopic.get('short_title')}
				  			studentAssessmentData={this.props.student.get('userAssessmentData')}
				  		/>) :
				  		<div className="row task">
				  			<div className="col-xs-10">
									<p className="taskList-task-title">There are currently no assessments for this topic.</p>
								</div>
							</div>
					}				  	
				</div>
				:
				null }
			</div>
		)
	}
}

export default TopicList;