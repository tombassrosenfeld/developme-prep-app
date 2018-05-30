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
    change(e) {
    	const person = this.state.person;
    	person.value = e.target.value;
    	this.setState({ person: person });
    }
    submit(e) {
    	e.preventDefault();
    	const data = this.state.person.reduce((data, { name, value })=> {
    		data[name] = value;
    		return data;
    	}, {});
    	this.props.onForgotFormSubmit(data);
    }
    disabled() {
    	return !this.state.person.every(({ value })=> value);
    }
    render() {
    	const { onCancel, forgotPassword } = this.props;
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
    					
    				    <div className="col-xs-6 col-xs-offset-3 col-sm-2 col-sm-offset-0">
                            <input className="btn btn-default btn-login btn-block" type="submit" disabled={ this.disabled() } value="Reset"/>
                        </div>  
                        <div className="col-xs-3 col-sm-1 col-sm-offset-0">
                            <button className="btn btn-default forgot-form__close" aria-label="Close forgot password" onClick={ onCancel }>&times;</button>
                        </div>
    				</form>
                    
                : <p className='onsubmit-text'>Please check your email to reset your password.</p> }

            </div>
    	)
    }
}
export default ForgotForm;