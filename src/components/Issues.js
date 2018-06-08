import React, { Component } from 'react';
import IssuesForm from '../containers/IssuesForm';
import AnimateHeight from 'react-animate-height';

class Issues extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
		};
		this.switch = this.switch.bind(this);
	}

	switch() {
		this.props.changeIssueState();
		this.setState({showForm: !this.state.showForm})
	}

	render() {
		const formStyle = {
			display: this.state.showForm ? 'block' : 'none',
		}
		return (
			<div className="topics panel">
				<IssuesForm 
					formStyle={formStyle}
					onCancel={ this.switch }
				/>
				<div className="report-issue" onClick={ this.switch }>
					<h2 className="topic-title report-issue-title">
						<span>Click here </span>to report an issue
					</h2>
				</div>				
			</div>
		);
	}
}
export default Issues; 




