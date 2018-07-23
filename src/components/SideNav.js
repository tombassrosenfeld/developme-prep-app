import React, { Component } from 'react';
import SideNavItem from './SideNavItem';
import AnimateHeight from 'react-animate-height';

class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			height: 0,
			activeIcon: null,
		};
		this.switch = this.switch.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	switch() {
		const current = this.state.toggle;
		this.setState({toggle: !current})
		this.setState({ height: this.state.height === 0 ? 'auto' : 0 })
	}

	onClick(i) {
		this.setState({activeIcon: i})
	}

	render() {
		const {title, navItems, onClickIcon, userRole} = this.props;
		const { height, activeIcon } = this.state;

		return (
			<nav id='student-nav'>
				<div className="navNarrow col-xs-12 col-sm-4 col-md-2 col-md-offset-2 narrow-padding">
					<div className="topics panel">
						<div className="topics-header toggle-div">
							<div className="topics-header-icon toggle-icon">
								<button className="hamburger hamburger--collapse" type="button" onClick={this.switch}>
								  <span className="hamburger-box">
								    <span className="hamburger-inner"></span>
								  </span>
								</button>
							</div>
							<p className="toggle-p">{userRole === 'instructor' ? "Cohorts" : "Topics"} </p>
						</div>

						<AnimateHeight
							duration={ 500 }
				        	height={ height }
				        >	
							<div className="narrowLinks">
							<h2 className="topics-title">{title}</h2>
								{ navItems.map((navItem, i) => (
									<SideNavItem 
										key={ i } 
										active={i === activeIcon}
										id={ userRole === 'instructor' ? navItem.get('name') : navItem.get('id')} 
										title={ userRole === 'instructor' ? navItem.get('name') : navItem.get('short_title') }
										selected={ navItem.get('selected') } 
										onClick={ () => {onClickIcon(userRole === 'instructor' ? i : navItem.get('id')); this.onClick(i); } }
										route={ userRole === 'instructor' ? '/cohort/' : '/prep/topic/'}
									/>
								)) }
							</div>
						</AnimateHeight>				
					</div>
				</div>
			</nav>
		);
	}
}



export default SideNav; 

