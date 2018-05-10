import React, { Component } from 'react';

class ForgotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: [
	    		{ name: "Enter Email to Reset Password", value: "" },
			],
        }

        this.submit = this.submit.bind(this);
    }
    change(e, i) {
    	const email = this.state.email.slice();
    	email[i].value = e.target.value;
    	this.setState({ email: email });
    }
    submit(e) {
    	e.preventDefault();
    	const data = this.state.email.reduce((data, { name, value })=> {
    		data[name] = value;
    		return data;
    	}, {});
    	this.props.onForgotFormSubmit(data);
    }
    disabled() {
    	return !this.state.email.every(({ value })=> value);
    }
    render() {
    	const { onCancel, forgotPassword } = this.props;
        console.log(forgotPassword);
    	return (
            <div>
        		{ !forgotPassword ?
                <div className="forgot-form">
    			<button className="popup-close" onClick={ onCancel }>✖</button>
    				<form onSubmit={ this.submit }>
    					{ this.state.email.map(({ name, value }, i) => (
    						<div>
    							<label>{ name }</label>
    						    <input 
    						    	key={ i }
    						    	type="email" 
    						    	className="form-control" 
    						    	id={"forgotPassword-" + name }
    						    	placeholder={"test@test.com"} 
    						    	onChange={ e => this.change(e, i) }
    						    />
    						</div>
    					))}
    					
    				
    					<div className="forgotPassword-buttons">	
    						<button className="btn btn-submit" disabled={ this.disabled() }>submit</button>
    					</div>	
    				</form>
    			</div>
                : <p className='onsubmit-text'>Please check your email to reset your password.</p> }

            </div>
    	)
    }
}
export default ForgotForm;