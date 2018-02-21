import React from 'react';
import SideNavItem from './SideNavItem';

export default ({title, navItems, onClickIcon, userRole}) => (
	<div className="col-xs-12 col-sm-4 col-md-2 col-md-offset-2 narrow-padding">
		<div className="topics panel">
			<div className="topics-header">
				<div className="topics-header-icon"><i className="fa fa-2x fa-folder-o" aria-hidden="true"></i></div>
			</div>
			<h2 className="topics-title">{title}</h2>
				{ navItems.map((navItem, i) => (
					<SideNavItem 
						key={ i } 
						id={ userRole === 'student' ? navItem.get('id') : navItem.get('name') } 
						title={ userRole === 'student' ? navItem.get('short_title') : navItem.get('name') }
						selected={ navItem.get('selected') } 
						onClick={ () => onClickIcon(i) }
						route={ userRole === 'student' ? '/prep/topic/' : '/cohort/'}
					/>
				)) }
		</div>
	</div>
)