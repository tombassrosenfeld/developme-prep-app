import React from 'react';
import { Link } from "react-router-dom";
import ModulesNav from "./ModulesNav";

export default ({user, loggedIn, logOut, userRole, setRegistering, isRegistering, cancel}) => (
	<div>
		<div className="row top-nav">
			<div className="col-xs-12">
				<Link className="home-link" to="/">
					<div className="logo"></div>
		  		</Link>			  
				{ loggedIn || isRegistering ? 
					<Link className="home-link" to="/">
						<button className="btn btn-default pull-right btn-logout" onClick={ () => isRegistering ? cancel() : logOut() }><i className="fa user-icon fa-user pull-right" aria-hidden="true"></i>{isRegistering ? 'Log In' : 'Log Out'}
						</button> 
					</Link>
					: 
					<button className="btn btn-default pull-right btn-logout" onClick={ setRegistering }><i className="fa user-icon fa-user-plus pull-right" aria-hidden="true"></i>Register
					</button> 
					}
			</div>
		</div>

		<div className="row header-body">
			<div className="col-xs-12 titles">
				<h1 className="header-course">Coding Fellowship |</h1>
				<h1 className="header-username">&nbsp;{loggedIn? userRole === 'instructor' ? 'Instructor' :  user.get('username') : 'App' }</h1>
				{loggedIn? <h2 className="header-cohort">{userRole === 'instructor' ? user.get('username') : user.get('cohort') ? 'Coding Fellowship ' + user.get('cohort') : 'Coding Fellowship - unknown'}</h2> : null }
			</div>
		</div>

		{ loggedIn? <ModulesNav text={userRole === 'instructor' ? 'Students' : 'Preparation' } /> : null }

	</div>
)
