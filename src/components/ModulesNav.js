import React from 'react';
import { Link } from "react-router-dom";

export default ({text}) => (
	<div className="row bottom-nav">
		<div className="col-xs-12 modules">		
			<Link to="/">
				<div className="bottom-nav-module">{text}</div> 
  		</Link>		
		</div>
	</div>
)