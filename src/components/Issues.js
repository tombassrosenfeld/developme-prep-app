import React, { Component } from 'react';
import { Link } from "react-router-dom";
import IssuesForm from './IssuesForm';
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
		const current = this.state.toggle;
		this.setState({toggle: !current})
		this.setState({ height: this.state.height === 0 ? 'auto' : 0 })
	}
	render() {
		const { height } = this.state;

		return (

				<div className="navNarrow col-xs-12 col-sm-4 col-md-2 col-md-offset-2 narrow-padding">
					<div className="topics panel">
						<div className="topics panel report-issue">
							<h2 className="topic-title report-issue-title">
								
								<span onClick={this.switch}>Click Here </span> 
					
								to Report an Issue
							</h2>
						</div>

							<AnimateHeight
								duration={ 500 }
					        	height={ height }
					        >	
								<div className="narrowLinks">
								<h2 className="topics-title"></h2>
								
										<IssuesForm 
				
										/>

								</div>
							</AnimateHeight>				
					</div>
				</div>
		);
	}
}



export default Issues; 


