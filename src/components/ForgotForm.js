import React, { Component } from 'react';

class ForgotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [
	    		{ name: "email", value: "" },
			],
        }

        this.submit = this.submit.bind(this);
    }
    change(e, i) {
    	const person = this.state.person.slice();
    	person[i].value = e.target.value;
    	this.setState({ person: person });
    }
    submit(e) {
    	e.preventDefault();
    	const data = this.state.person.reduce((data, { name, value })=> {
    		data[name] = value;
    		return data;
    	}, {});
    	this.props.onForgotFormSubmit(data);
        console.log(data);
    }
    disabled() {
    	return !this.state.person.every(({ value })=> value);
    }
    render() {
    	const { onCancel, forgotPassword } = this.props;
    	return (
            <div  className="forgot-form">
        		{ !forgotPassword ?
                <div>
    				<form onSubmit={ this.submit }>
    					{ this.state.person.map(({ name, value }, i) => (
    						<div className='forgot-form-input' key={ i }>
    							<label>Please enter your email to reset your password: </label>
    						    <input 
    						    	type="email" 
    						    	className="form-control" 
    						    	placeholder={"test@test.com"} 
    						    	onChange={ e => this.change(e, i) }
    						    />
    						</div>
    					))}
    					
    				    <div className="forgot-form-button-container">    
        					<div className="forgot-form-button">	
        						<button className="btn btn-submit" disabled={ this.disabled() }>submit</button>
        					</div>	
                            <p className="forgot-form-cancel" onClick={ onCancel }>Cancel</p>
                        </div>  
    				</form>
                    
    			</div>
                : <p className='onsubmit-text'>Please check your email to reset your password.</p> }

            </div>
    	)
    }
}
export default ForgotForm;