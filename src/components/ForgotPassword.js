import React, { Component } from 'react';
import ForgotForm from '../containers/ForgotForm';
import AnimateHeight from 'react-animate-height';

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false,
			height: 0,
		};
		this.switch = this.switch.bind(this);
	}
	switch() {
		this.props.toggleForgot();
		const current = this.state.toggle;
		this.setState({toggle: !current})
		this.setState({ height: this.state.height === 0 ? 'auto' : 0 })
	}
	render() {
		const { height } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="forgot-password-btn">
						<button className= "btn btn-default btn-login" onClick={ this.switch }>Forgot Password</button>
					</div>
				</div>
				<AnimateHeight
					duration={ 500 }
		        	height={ height }
		        >	
					<ForgotForm />
				</AnimateHeight>
			</div>
		);
	}
}
export default ForgotPassword;