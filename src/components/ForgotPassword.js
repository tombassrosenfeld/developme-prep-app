import React from 'react';
import {baseURL} from '../data/axios';

export default ({toggleForgot, showForgot, resetSuccess, forgotPasswordMessage}) => {
	const resetLink = "wp-login.php?action=lostpassword";
	return <div className="row">
		<div className="col-xs-12">
			<a className="forgot-password-link" href={baseURL+resetLink} target="_blank">Reset Password</a>
		</div>
	</div>
};