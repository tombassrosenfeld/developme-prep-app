import React from 'react';
import { Link } from "react-router-dom";

export default ({userRole, navItems, hasMarking, hasNewFeedback, activeModule, setActiveModule, numStudentsToMark}) => (
	<div className="row bottom-nav">
		<div className="col-xs-12 modules">		
			{userRole? navItems.get(userRole).map((navItem, i) => {
				let className = 'bottom-nav-module btn btn-home-green';
				if(Number.isInteger(activeModule)) {
					className += i === activeModule ? ' active' : '';
				} 
				return (
					<Link 
						className={ className }
						onClick={() => setActiveModule(i)}
						to={navItem.get('link')}
						key={i}>
					{ numStudentsToMark && navItem.get('label') === 'Marking' ? <React.Fragment>{navItem.get('label')} <span className="bottom-nav-module__notification">{numStudentsToMark}</span></React.Fragment> : navItem.get('label')}
		  			</Link>		
	  			)
			}) : null}
		</div>
	</div>
)