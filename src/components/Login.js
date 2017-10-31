import React from 'react';

export default ({authenticate}) => (
	<div className="row">
		<div className="col-sm-5">	
			<div className="form-group">
			    <input type="email" className="form-control" id="username" placeholder="username" />
			</div>
		</div>
		<div className="col-sm-5">	
			<div className="form-group">
			    <input type="email" className="form-control" id="password" placeholder="password" />
			</div>
		</div>
		<div className="col-sm-2">
			<button	onClick={ () => authenticate('developme_admin', 'password') } className="btn btn-default">Submit</button>
		</div>
	</div>
)