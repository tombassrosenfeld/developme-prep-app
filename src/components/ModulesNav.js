import React from 'react';
import { Link } from "react-router-dom";

export default ({text}) => (
	<div className="row bottom-nav">
		<div className="col-xs-12 modules">		
			<Link to="/" className='home-div'>
				<div className="bottom-nav-module btn-logout">{text}<i className="fa fa-home" aria-hidden="true"></i></div> 
  			</Link>		
		</div>
	</div>
)