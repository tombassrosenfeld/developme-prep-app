import React from 'react';
import { Link } from "react-router-dom";

export default ({user, loggedIn, logOut}) => (
	<div className="page-header">
		<div className="row">
			<div className="col-xs-12 col-sm-8">
				<Link className="home-link" to="/">
					<div className="logo"></div>
		  			<h1 className="header-subtitle"><small>Coding Fellowship Preparation</small></h1>
		  		</Link>
			</div>
			<div className="col-xs-8 col-sm-3">
				<h4 className="header-loggedIn">{ loggedIn? 'Welcome:' : null}</h4>
				<h4 className="header-loggedIn">{ loggedIn? user.get('username') : null}</h4>
			</div>
			<div className="col-xs-1 col-sm-1">
				{loggedIn? <button className="btn btn-default" onClick={ () => logOut() }>Log Out</button> : null}
			</div>
		</div>
	</div>
)