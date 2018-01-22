import React from 'react';
import { Link } from "react-router-dom";

export default ({id, selected, title, onClick}) => (
	<Link to={ '/topics/' + id }>
		<div 
			className="topic-icon row"
			onClick={ onClick } 
		>
			<h2 className="topic-title">{ title }</h2>
		</div>
    </Link>
)