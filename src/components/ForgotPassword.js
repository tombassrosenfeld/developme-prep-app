import React, { Component } from 'react';
import ForgotForm from '../containers/ForgotForm';

export default ({toggleForgot, showForgot}) => (
	<div className="container">
		<div className="row">
			<div className="forgot-password-btn">
				<button className= "btn btn-default btn-login" onClick={ toggleForgot }>Forgot Password</button>
			</div>
		</div>
		{showForgot ? <ForgotForm /> : null}
	</div>
);

