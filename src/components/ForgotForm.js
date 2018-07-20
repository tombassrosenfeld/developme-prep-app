import React, { Component } from 'react';

class ForgotForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errorMessage: ''
        }
        this.submit = this.submit.bind(this);
    }
    onChange(e) {
    	this.setState({ email: e.target.value });
    }
    submit(e) {
    	e.preventDefault();

        if(!this.state.email) {
            this.setState({errorMessage: 'Please enter your email address.'})
        } else {
            const data = {email: this.state.email};
            this.props.onForgotFormSubmit(data);
            this.setState({errorMessage: ''})
        }
    }
    render() {
        const { forgotPassword, resetSuccess, forgotPasswordMessage } = this.props;
    	const { errorMessage } = this.state;
    	return (
            <div className="row forgot-form">
        		{ !forgotPassword || !resetSuccess ?
                    <form onSubmit={ this.submit }>
                        <div className="col-xs-12">  
                            <h2 className="forgot-form__header">Reset your password</h2>
                            <p className="forgot-form__text">Enter your email address and we will send you a password reset link.</p>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3">  
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder={"test@test.com"} 
                                    onChange={ e => this.onChange(e) }
                                    autocomplete="off"
                                />
                            </div>
                            <div className="form-group">
                                <input className="btn btn-default btn-login btn-block" type="submit" value="Reset password"/>
                            </div>
                        </div>
                        <div className="col-sm-6 col-sm-offset-3">  
                            {errorMessage ? <p className="forgot-form__message forgot-form__message--fail">{errorMessage}</p> : null}
                            { !resetSuccess && forgotPassword ?  <p className="forgot-form__message forgot-form__message--fail">{forgotPasswordMessage}</p> : null }
                        </div>
    				</form>
                : null }
            </div>
    	)
    }
}
export default ForgotForm;