import React from 'react';
import ForgotPassword from '../containers/ForgotPassword';

export default ({user, authenticate, onFormElementChange, forgotPassword }) => (
	<div className="container">
		<div className="row">
			<form onSubmit={ (e) => authenticate(e, user.get('username'), user.get('password'))}>
				<div className="col-sm-5">	
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
				<div className="col-sm-5">	
					<div className="form-group">
					    <input 
					    	type="password" 
					    	className="form-control" 
					    	id="password" 
					    	placeholder="password" 
					    	value={ user.get('password') }
					    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
					    />
					</div>
				</div>
				<div className="col-sm-2">	
					<input className="btn btn-default btn-login btn-block" type="submit" />
				</div>
			</form>
		</div>
		<ForgotPassword />	
	</div>
)