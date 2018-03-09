import React from 'react';
import { Link } from "react-router-dom";

export default ({id, selected, title, onClick, route}) => (
	<Link to={ route + id }>
		<div 
			className="topics-icon row"
			onClick={ onClick } 
		>
			<h2 className="topics-icon-title">{ title }</h2>
		</div>
    </Link>
)