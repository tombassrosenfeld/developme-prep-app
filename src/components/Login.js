import React from 'react';

export default ({login, authenticate, onFormElementChange}) => (
	<div className="row">
		<form>
			<div className="col-sm-5">	
				<div className="form-group">
				    <input 
				    	type="name" 
				    	className="form-control" 
				    	id="username" 
				    	placeholder="username" 
				    	value={ login.get('username') }
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
				    	value={ login.get('password') }
				    	onChange={ (e) => onFormElementChange(e.target.id, e.target.value) }
				    />
				</div>
			</div>
		</form>
		<div className="col-sm-1 col-sm-offset-1">
			<button	onClick={ () => authenticate(login.get('username'), login.get('password')) } className="btn btn-default">Submit</button>
		</div>
	</div>
)