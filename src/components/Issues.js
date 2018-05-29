import React, { Component } from 'react';
import IssuesForm from '../containers/IssuesForm';
import AnimateHeight from 'react-animate-height';

class Issues extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			height: 0,
		};
		this.switch = this.switch.bind(this);
	}

	switch() {
		this.props.changeIssueState();
		const current = this.state.toggle;
		this.setState({toggle: !current})
		this.setState({ height: this.state.height === 0 ? 'auto' : 0 })
	}

	render() {
		const { height } = this.state;
		
		return (
			<div className="topics panel">
				<div className="report-issue">
					<h2 className="topic-title report-issue-title">
						<span onClick={ this.switch }>Click here </span>to report an issue
					</h2>
				</div>

				<AnimateHeight
					duration={ 500 }
		        	height={ height }
		        >	
					<IssuesForm 
						onCancel = { this.switch }
					/>
				</AnimateHeight>				
			</div>
		);
	}
}
export default Issues; 




