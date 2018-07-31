import React from 'react';
import { Link } from "react-router-dom";

export default ({userRole, navItems, hasMarking, hasNewFeedback, activeModule, setActiveModule}) => (
	<div className="row bottom-nav">
		<div className="col-xs-12 modules">		
			{userRole? navItems.get(userRole).map((navItem, i) => {
				let className = (hasMarking || hasNewFeedback) && (navItem.get('label') === 'Marking' || navItem.get('label') === 'Feedback') ? 
						'glow bottom-nav-module btn btn-home-green' : 'bottom-nav-module btn btn-home-green'
				className += i === activeModule ? ' active' : '';
				return (
					<Link 
						className={ className }
						onClick={(e) => setActiveModule(e, i)}
						to={navItem.get('link')}
						key={i}>
					{navItem.get('label')}
		  			</Link>		
	  			)
			}) : null}
		</div>
	</div>
)