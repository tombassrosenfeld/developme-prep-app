import Issues from '../containers/Issues';
import React from 'react';

export default ({user, loggedIn, logOut, userRole}) => (
	<footer className="main-footer">	
		<Issues />
	</footer>
)

