import React from 'react';
import { Link } from "react-router-dom";

export default ({user, loggedIn, logOut}) => (
	<div className="page-header">
		<div className="row">
			<div className="col-xs-8 col-sm-8">
				<Link className="home-link" to="/">
					<div className="logo"></div>
		  		</Link>
			</div>
			<div className="col-xs-4 col-sm-4">
				{loggedIn? <button className="btn btn-default pull-right btn-logout" onClick={ () => logOut() }>Log Out</button> : null}
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12 col-sm-8">
				<h1 className="header-subtitle">Coding Fellowship Preparation</h1>
			</div>
			<div className="col-xs-12 col-sm-4">
				{loggedIn? <h4 className="header-loggedIn pull-right">{ user.get('username') }</h4> : null }
			</div>
		</div>
	</div>
)