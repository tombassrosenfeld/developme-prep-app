import React, { Component } from 'react';

class IssuesForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            issues: [
	    		{ name: "subject", value: "" },
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
    }

    disabled() {
    	return !this.state.issues.every(({ value })=> value);
    }

    render() {
    	const { onCancel, issue } = this.props;
    	return (
            <div>
        		{ !issue ?
                <div className="issues-form">
                    <button className="popup-close" onClick={ onCancel }>✖</button>
    				<form onSubmit={ this.submit }>
    					{ this.state.issues.map(({ name, value }, i) => (
    						<div key={i} className="form-group">
    							<label>{ name }</label>
    						    <input 
    						    	type="textarea" 
    						    	className="form-control" 
    						    	id={"issue-" + name }
    						    	placeholder={"Enter " +  name + " of issue here"} 
    						    	onChange={ e => this.change(e, i) }
    						    />
    						</div>
    					))}
    					
    				
    					<div className="issue-buttons">	
    						<button className="btn btn-submit" disabled={ this.disabled() }>Submit</button>
    					</div>	
    				</form>
    			</div>
                : <p className='onsubmit-text'>Thank you for submitting your form. We have contacted the administrator.</p> }

            </div>
    	)
    }
}
export default IssuesForm;
