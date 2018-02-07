import React from 'react';
import { Link } from "react-router-dom";

export default ({user, authenticate, onFormElementChange}) => (
	<div className="row">
		<form>
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
		</form>
		<div className="col-sm-1 col-sm-offset-1">
			<Link className="home-link" to="/">
				<button	onClick={ () => authenticate(user.get('username'), user.get('password')) } className="btn btn-default btn-login">Submit</button>
	  		</Link>	
		</div>
	</div>
)