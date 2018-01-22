import React from 'react';
import { Link } from "react-router-dom";

export default ({id, selected, title, onClick}) => (
	<Link to={ '/topics/' + id }>
		<div 
			className="topic-icon"
			onClick={ onClick } 
		>
			<h2>{ title }</h2>
		</div>
    </Link>
)