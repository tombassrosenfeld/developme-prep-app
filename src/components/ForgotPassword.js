import React from 'react';
import {baseURL} from '../data/axios';

export default ({toggleForgot, showForgot, resetSuccess, forgotPasswordMessage}) => {
	const resetLink = "wp-login.php?action=lostpassword&redirect_to="+baseURL+"wp-content%2Fthemes%2Fdev-me-resources-child%2Fapp-redirect.php";
	return <div className="row">
		<div className="col-xs-12">
			<a className="forgot-password-link" href={baseURL+resetLink} target="_blank">Reset Password</a>
		</div>
	</div>
};