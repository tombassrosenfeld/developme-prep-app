import React, { Component } from 'react';

class ForgotForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.submit = this.submit.bind(this);
    }
    onEmailChange(e) {
    	this.setState({ email: e.target.value });
    }
    onPassChange(e) {
        this.setState({ password: e.target.value });
    }
    submit(e) {
    	e.preventDefault();
    	const data = {email: this.state.email, password: this.state.password};
    	this.props.onForgotFormSubmit(data);
    }
    disabled() {
    	return !this.state.email && this.state.password;
    }
    render() {
    	const { forgotPassword, resetSuccess, forgotPasswordMessage } = this.props;
    	return (
            <div className="row forgot-form">
        		{ !forgotPassword || !resetSuccess ?
                    <form onSubmit={ this.submit }>
                        <div className="col-sm-6 col-sm-offset-1">  
                            <h2 className="forgot-form__header">Reset your password</h2>
                        </div>
                        <div className="col-sm-6 col-sm-offset-1">  
                            <div className="form-group">
                                <label className="forgot-form__label">Email address: </label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder={"test@test.com"} 
                                    onChange={ e => this.onEmailChange(e) }
                                />
                            </div>
                            <div className="form-group">
                                <label className="forgot-form__label">New password: </label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder={"test@test.com"} 
                                    onChange={ e => this.onPassChange(e) }
                                />
                            </div>
                            <div className="form-group">
                                <input className="btn btn-default btn-login btn-block" type="submit" disabled={ this.disabled() } value="Reset"/>
                            </div>

                        </div>
    				</form>
                    
                : null }
                { !resetSuccess && forgotPassword ?  <p className='forgot-form__message forgot-form__message--fail'>{forgotPasswordMessage}</p> : null }
                { resetSuccess && forgotPassword ?  <p className='forgot-form__message forgot-form__message--success'>{forgotPasswordMessage}</p> : null }

            </div>
    	)
    }
}
export default ForgotForm;