import React from 'react';
import { Link } from "react-router-dom";

export default ({id, onClick}) => (
	<Link to={ '/module/' + id }>
		<div className={'col-xs-3 col-sm-2 col-md-1 module-icon module-icon-' + id } >
		</div>
    </Link>
)