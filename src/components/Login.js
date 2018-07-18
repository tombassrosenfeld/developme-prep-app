import React from 'react';
import ForgotPassword from '../containers/ForgotPassword';
import Register from '../containers/Register';

export default ({user, authenticate, onFormElementChange, forgotPassword, registering, cancel, userRegistered }) => (
	<div>
		<div className="row">
			{!registering ?
			<form onSubmit={ (e) => authenticate(e, user.get('username'), user.get('password'))}>
				<div className="col-sm-4 col-sm-offset-1">	
					<div className="form-group">
					    <input 
					    	type="name" 
					    	className="form-control" 
					    	id="username" 
					    	placeholder="username" 
					    	value={ user.get('username') }
					    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
					    />
					</div>
				</div>
				<div className="col-sm-4">	
					<div className="form-group">
					    <input 
					    	type="password" 
					    	className="form-control" 
					    	id="password" 
					    	placeholder="password" 
					    	value={ user.get('password') }
					    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
					    	autoComplete="current-password"
					    />
					</div>
				</div>
				<div className="col-sm-2">	
					<input className="btn btn-default btn-login btn-block" type="submit" value="Login" />
				</div>
			</form> : <Register cancel={cancel}/> }
			<div className="col-xs-12">	
			</div>
		</div>
		{!registering ? <ForgotPassword />	: null}
		{userRegistered ? <div className="row">
			<div className="col-xs-12 col-sm-6 col-sm-offset-3">
				<p className="register-confirmation text-center">Your user account has been created, please login.</p>
			</div>
		</div> : null }
	</div>
)