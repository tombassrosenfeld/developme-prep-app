import React from 'react';
import ForgotForm from '../containers/ForgotForm';

export default ({toggleForgot, showForgot, resetSuccess, forgotPasswordMessage}) => (
	<div className="container">
		<div className="row">
			<div className="forgot-password-btn">
				<button className= "btn btn-default btn-login" onClick={ toggleForgot }>Forgot Password</button>
			</div>
		</div>
		{showForgot ? <ForgotForm /> : null}
        { resetSuccess && showForgot ?  <p className="forgot-form__message forgot-form__message--success">{forgotPasswordMessage}</p> : null }
	</div>
);