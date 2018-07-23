import React from 'react';
import {baseURL} from '../data/axios';

const resetLink = "wp-login.php?action=lostpassword&redirect_to="+baseURL+"%2Fwp-content%2Fthemes%2Fdev-me-resources-child%2Fapp-redirect.php";

export default ({toggleForgot, showForgot, resetSuccess, forgotPasswordMessage}) => (
	<div className="row">
		<div className="col-xs-12">
			<a className="forgot-password-link" href={baseURL+resetLink} target="_blank">Reset Password</a>
		</div>
	</div>
);