import React, { Component } from 'react';

class ForgotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }

        this.submit = this.submit.bind(this);
    }
    change(e) {
    	this.setState({ email: e.target.value });
    }
    submit(e) {
    	e.preventDefault();
    	const data = {email: this.state.email};
    	this.props.onForgotFormSubmit(data);
    }
    disabled() {
    	return !this.state.email;
    }
    render() {
    	const { forgotPassword } = this.props;
    	return (
            <div className="row forgot-form">
        		{ !forgotPassword ?
                    <form onSubmit={ this.submit }>
                        <div className="col-sm-8 col-sm-offset-1">  
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder={"test@test.com"} 
                                    onChange={ e => this.change(e) }
                                />
    							<label className="forgot-form__label">Please re-enter your email to reset your password: </label>
                            </div>
                        </div>
    					
    				    <div className="col-sm-2">
                            <input className="btn btn-default btn-login btn-block" type="submit" disabled={ this.disabled() } value="Reset"/>
                        </div>  
    				</form>
                    
                : <p className='onsubmit-text'>Your request has been submitted. We will get back to you very soon.</p> }

            </div>
    	)
    }
}
export default ForgotForm;