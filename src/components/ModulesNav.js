import React from 'react';
import { Link } from "react-router-dom";

export default ({userRole, navItems, hasMarking, hasNewFeedback}) => (
	<div className="row bottom-nav">
		<div className="col-xs-12 modules">		
			{userRole? navItems.get(userRole).map((navItem, i) => (
				<Link to={navItem.get('link')} key={i}>
					<div className={ (hasMarking || hasNewFeedback) && (navItem.get('label') === 'Marking' || navItem.get('label') === 'Feedback') ? 'glow bottom-nav-module' : 'bottom-nav-module' }>
						{navItem.get('label')}
					</div> 
	  			</Link>		
			)) : null}
		</div>
	</div>
)