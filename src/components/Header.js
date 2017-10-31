import React from 'react';
import { Link } from "react-router-dom";

export default () => (
	<div className="page-header">
		<a className="home-link" href="/">
			<div className="logo"></div>
  			<h1 className="header-subtitle"><small>Coding Fellowship Preparation</small></h1>
  		</a>
  		<Link to="/login/" className="btn btn-default pull-right">Login</Link>
	</div>
)