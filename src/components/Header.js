import React from 'react';
import { Link } from "react-router-dom";
import ModulesNav from "./ModulesNav";

export default ({user, loggedIn, logOut, userRole}) => {
	console.log(user.toJS());
	return (
	<div>
		<div className="row top-nav">
			<div className="col-xs-12">
				<Link className="home-link" to="/">
					<div className="logo"></div>
		  		</Link>	
				{ loggedIn? <button className="btn btn-default pull-right btn-logout" onClick={ () => logOut() }>Log Out</button> : null}
				{ loggedIn? <i className="fa fa-user-o pull-right" aria-hidden="true"></i> : null }
			</div>
		</div>

		<div className="row header-body">
			<div className="col-xs-12 titles">
				<h1 className="header-course">Coding Fellowship |</h1>
				<h1 className="header-username">&nbsp;{loggedIn? userRole === 'student' ? user.get('username') : 'Instructor' : 'App' }</h1>
				{loggedIn? <h2 className="header-cohort">{userRole === 'student' ? 'Coding Fellowship ' + user.get('cohort').slice(2) : user.get('username')}</h2> : null }
			</div>
		</div>

		{ loggedIn? <ModulesNav text={userRole === 'student' ? 'Preparation' : 'Students'} /> : null }

	</div>
	)
}