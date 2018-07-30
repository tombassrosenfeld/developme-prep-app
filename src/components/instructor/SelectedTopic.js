import React, {Component} from 'react';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import StudentTasksRemaining from './StudentTasksRemaining';
import AssessmentListItem from './AssessmentListItem';
import SelectedTopicHeader from './SelectedTopicHeader';

class SelectedTopic extends Component {

	componentDidMount() {
		Events.scrollEvent.register('begin');
		Events.scrollEvent.register('end');

		this.scrollToWithContainer();
	}

	scrollTo() {
		scroller.scrollTo('scroll-to-element', {
			duration: 500,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	}

	scrollToWithContainer() {

		let goToContainer = new Promise((resolve, reject) => {

			Events.scrollEvent.register('end', () => {
				resolve();
				Events.scrollEvent.remove('end');
			});

			scroller.scrollTo('scroll-container-topic', {
				duration: 500,
				delay: 0,
				smooth: 'easeInOutQuart'
			});

		});
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render() {
		const {selectedTopic, selectedAssessment, student, onClick} = this.props;

		this.scrollToWithContainer();

		return (
			<div id="scroll-container-topic" className="panel selected-topic">
				<SelectedTopicHeader title={selectedTopic.get('short_title')}/>
				<StudentTasksRemaining
					selectedTopic = { selectedTopic }
					selectedAssessment = { selectedAssessment }
					student = { student }
					onClick = { onClick }
				/>
				<h2 className="panel-title">Assessments:</h2>
				{ selectedTopic.get('assessments').size > 0 && student.get('userAssessmentData').size ?
			  		selectedTopic.get('assessments').map( (assessment, i) => (
			  		<AssessmentListItem 
			  			key={i} i={i} 
			  			assessment={assessment} 
			  			onClick={onClick} 
			  			questions={selectedAssessment ? selectedAssessment.get('questions') : null}
			  			topicTitle={selectedTopic.get('short_title')}
			  			studentAssessmentData={student.get('userAssessmentData')}
			  		/>)) :
			  		<div className="row task">
			  			<div className="col-xs-10">
							<p className="taskList-task-title">
							{
								selectedTopic.get('assessments').size ? 'This student has no assessment data for this topic' : 'There are currently no assessments for this topic.'
							}
							</p>
						</div>
					</div>
				}				  	
			</div>
		);
	}
}
	
export default SelectedTopic;

							








