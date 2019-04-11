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
						key={i}
					>
						{ navItem.get('label') } 
						{ 
							// check if there's marking or feedback
							(numStudentsToMark && navItem.get('label') === 'Marking') ||
							(hasNewFeedback && navItem.get('label') === 'Feedback') ?
							// display notification if so
							<span className="bottom-nav-module__notification">
								{numStudentsToMark || +hasNewFeedback}
							</span>
							: null
						}
					</Link>		
				)
			}) : null}
		</div>
	</div>
)