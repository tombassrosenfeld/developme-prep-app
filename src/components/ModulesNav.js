import React from 'react';
import { Link } from "react-router-dom";

export default ({userRole, navItems}) => {
	return (
		<div className="row bottom-nav">
			<div className="col-xs-12 modules">		
				{userRole? navItems.get(userRole).map((navItem, i) => (
					<Link to={navItem.get('link')} key={i}>
						<div className="bottom-nav-module">{navItem.get('label')}</div> 
		  			</Link>		
				)) : null}
			</div>
		</div>
	)
}
