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
		const hamburger = document.querySelector(".hamburger");
    	hamburger.classList.toggle("is-active");
	}
	render() {
		const {title, navItems, onClickIcon, userRole} = this.props;
		return (
			<nav>
				<div className="navNarrow col-xs-12 col-sm-4 col-md-2 col-md-offset-2 narrow-padding">
					<div className="topics panel">
						<div className="topics-header toggle-div" onClick={this.switch}>
							<div className="topics-header-icon toggle-icon">
								<button class="hamburger hamburger--collapse" type="button">
								  <span class="hamburger-box">
								    <span class="hamburger-inner"></span>
								  </span>
								</button>
							</div>
							<p className="toggle-p">{userRole === 'student' ? "Topics" : "Cohorts"} </p>
						</div>

						{this.state.toggle ? 
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
						: null }

					</div>
				</div>
			</nav>
		);
	}
}



export default MenuToggle; 

