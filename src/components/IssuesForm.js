import React, { Component } from 'react';

class IssuesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: [
	    		{ name: "type", value: "" },
	   			{ name: "description", value: "" },
			],
        }

        this.submit = this.submit.bind(this);
    }
    change(e, i) {
    	const issues = this.state.issues.slice();
    	issues[i].value = e.target.value;
    	this.setState({ issues: issues });
    }
    submit(e) {
    	e.preventDefault();
    	const data = this.state.issues.reduce((data, { name, value })=> {
    		data[name] = value;
    		return data;
    	}, {});
    	this.props.submitIssue(data);
    	const submitted = this.state.submitted;
    	this.setState({ submitted: !submitted })
    }
    disabled() {
    	return !this.state.issues.every(({ value })=> value);
    }
    render() {
    	const { onCancel } = this.props;
    	return (
    		<div className="row issues-form col-xs-12 col-sm-8 col-md-6 narrow-padding">
			<button className="popup-close" onClick={ onCancel }>✖</button>
				<form onSubmit={ this.submit }>
					{ this.state.issues.map(({ name, value }, i) => (
						<div className="form-group">
							<label>{ name }</label>
						    <input 
						    	key={ i }
						    	type="textarea" 
						    	className="form-control" 
						    	id={"issue-" + name }
						    	placeholder={"Enter " +  name + " of issue here"} 
						    	onChange={ e => this.change(e, i) }
						    />
						</div>
					))}
					
				
					<div className="issue-buttons">	
						<button className="btn btn-submit" disabled={ this.disabled() }>submit</button>
					</div>	
				</form>
			</div>
    	)
    }
}
export default IssuesForm;

// <div className="form-group">
// 	<label>Issue Report for: </label>
// 	<select className="form-control">
// 		<option value="technical-issue">Technical Issue</option>
// 		<option value="tasks-assessments">Tasks or Assessments</option>
// 		<option selected value="usability">Usability</option>
// 		<option value="other">Other</option>
// 	</select>
// </div>