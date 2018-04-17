import React, { Component } from 'react';
import SideNavItem from './SideNavItem';

class MenuToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
		};
		this.switch = this.switch.bind(this);
	}
	switch() {
		const current = this.state.toggle;
		this.setState({toggle: !current})
		let menuLinks = document.querySelector('.narrowLinks')
		this.state.toggle ? menuLinks.style.display = 'block' : menuLinks.style.display = 'none'
	}
	render() {
		const {title, navItems, onClickIcon, userRole} = this.props;
		return (
			<nav>
				<div className="navNarrow col-xs-12 col-sm-4 col-md-2 col-md-offset-2 narrow-padding">
					<div className="topics panel">
						<div className="topics-header center-div" onClick={this.switch}>
							<div className="topics-header-icon center-icon">
								<i className="fa fa-2x fa-bars" aria-hidden="true"></i>
							</div>
							<p>Click here to expand {userRole === 'student' ? "Topics" : "Cohorts"} </p>
						</div>
						
						<div className="narrowLinks">
						<h2 className="topics-title">{title}</h2>
							{ navItems.map((navItem, i) => (
								<SideNavItem 
									key={ i } 
									id={ userRole === 'student' ? navItem.get('id') : navItem.get('name') } 
									title={ userRole === 'student' ? navItem.get('short_title') : navItem.get('name') }
									selected={ navItem.get('selected') } 
									onClick={ () => onClickIcon(userRole === 'student' ? navItem.get('id') : i) }
									route={ userRole === 'student' ? '/prep/topic/' : '/cohort/'}
								/>
							)) }
						</div>
					</div>
				</div>
			</nav>
		);
	}
}



export default MenuToggle; 

