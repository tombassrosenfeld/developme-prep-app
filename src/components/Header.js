import React from 'react';
import { Link } from "react-router-dom";

export default ({user, loggedIn, logOut}) => (
	<div className="page-header">
		<div className="top-nav">
			<div className="row">
				<div className="col-xs-12">
					<Link className="home-link" to="/">
						<div className="logo"></div>
			  		</Link>	
					{loggedIn? <button className="btn btn-default pull-right btn-logout" onClick={ () => logOut() }>Log Out</button> : null}
				</div>
			</div>
		</div>

		<div className="row">
			<div className="col-xs-12 titles">
				<h1 className="header-course">Coding Fellowship |</h1>
				<h1 className="header-username">&nbsp;{loggedIn? user.get('username') : 'App' }</h1>
			</div>
		</div>
	</div>
)